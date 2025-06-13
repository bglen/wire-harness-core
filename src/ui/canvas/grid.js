/*
 grid.js
 Brian Glen
 Manages grid drawing with major/minor lines, zoom-aware crisp rendering, and responsive resize.
*/

import * as fabric from 'fabric';

let _fabricCanvas = null;
let _gridPresets = [20, 50, 100];
let _currentPresetIndex = 2;
let _gridVisible = true;
let _resizeTimeout = null;
let _lastSpacingPx = 0;

function applyGridPattern(spacingPx) {
  if (!_fabricCanvas) return;

  // Determine subdivisions: skip minor if spacing too small
  const defaultSubdivisions = 5;
  const minorThreshold = 10; // px threshold to draw minor lines
  const subdivisions = spacingPx >= minorThreshold ? defaultSubdivisions : 0;

  const majorColor = 'rgba(100, 150, 200, 0.25)';
  const minorColor = 'rgba(100, 150, 200, 0.10)';
  const lineWidthMajor = 1;
  const lineWidthMinor = 0.5;

  const tileSize = Math.ceil(spacingPx);

  const tileElem = makeGridPatternTile(
    tileSize,
    majorColor,
    minorColor,
    lineWidthMajor,
    lineWidthMinor,
    subdivisions
  );

  const pattern = new fabric.Pattern({
    source: tileElem,
    repeat: 'repeat'
  });

  _fabricCanvas.backgroundColor = pattern;
}

function getCanvasPixelSize() {
  const elem = _fabricCanvas.lowerCanvasEl;
  const rect = elem.getBoundingClientRect();
  return {
    width: Math.floor(rect.width),
    height: Math.floor(rect.height)
  };
}

function cycleGridPreset() {
  _currentPresetIndex = (_currentPresetIndex + 1) % _gridPresets.length;
  const baseSpacing = _gridPresets[_currentPresetIndex];
  redrawGrid(baseSpacing);
  _fabricCanvas.requestRenderAll();
  console.log(`[grid.js] Grid spacing changed to ${baseSpacing}`);
}

function onKeyDown(e) {
  if (e.key === 'g' || e.key === 'G') {
    e.preventDefault();
    cycleGridPreset();
  }
}

function attemptResizeAndRedraw() {
  const { width: w, height: h } = getCanvasPixelSize();
  if (w <= 0 || h <= 0) {
    console.warn('[grid.js] Canvas size not ready.');
    return;
  }

  _fabricCanvas.setWidth(w);
  _fabricCanvas.setHeight(h);

  const baseSpacing = _gridPresets[_currentPresetIndex];
  redrawGrid(baseSpacing);
  _fabricCanvas.requestRenderAll();
}

function resizeWindow() {
  clearTimeout(_resizeTimeout);
  _resizeTimeout = setTimeout(() => {
    window.requestAnimationFrame(attemptResizeAndRedraw);
  }, 100);
}

function redrawGrid(baseSpacing) {
  const zoom = _fabricCanvas.getZoom() || 1;
  const spacingPx = baseSpacing * zoom;

  // Only redraw if spacing change significant
  if (Math.abs(spacingPx - _lastSpacingPx) > 1) {
    applyGridPattern(spacingPx);
    _lastSpacingPx = spacingPx;
  }
}

/**
 * makeGridPatternTile(majorSpacing, majorColor, minorColor, lineWidthMajor, lineWidthMinor, subdivisions)
 */
export function makeGridPatternTile(
  majorSpacing = 20,
  majorColor = 'rgba(100, 150, 200, 0.25)',
  minorColor = 'rgba(100, 150, 200, 0.10)',
  lineWidthMajor = 1,
  lineWidthMinor = 0.5,
  subdivisions = 5
) {
  const tile = document.createElement('canvas');
  tile.width = majorSpacing;
  tile.height = majorSpacing;
  const ctx = tile.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, majorSpacing, majorSpacing);

  // Draw minor grid lines
  if (subdivisions > 0) {
    const minorStep = majorSpacing / subdivisions;
    ctx.beginPath();
    ctx.strokeStyle = minorColor;
    ctx.lineWidth = lineWidthMinor;
    for (let i = 1; i < subdivisions; i++) {
      const pos = i * minorStep + lineWidthMinor / 2;
      ctx.moveTo(pos, 0);
      ctx.lineTo(pos, majorSpacing);
      ctx.moveTo(0, pos);
      ctx.lineTo(majorSpacing, pos);
    }
    ctx.stroke();
  }

  // Draw major grid lines
  ctx.beginPath();
  ctx.strokeStyle = majorColor;
  ctx.lineWidth = lineWidthMajor;
  const halfMajor = lineWidthMajor / 2;
  ctx.moveTo(halfMajor, 0);
  ctx.lineTo(halfMajor, majorSpacing);
  ctx.moveTo(0, halfMajor);
  ctx.lineTo(majorSpacing, halfMajor);
  ctx.stroke();

  return tile;
}

/**
 * initializeGrid(fabricCanvas, htmlCanvasElement, presets?)
 */
export function initializeGrid(fabricCanvas, htmlCanvasElement, presets = null) {
  _fabricCanvas = fabricCanvas;

  if (Array.isArray(presets) && presets.length > 0) {
    _gridPresets = presets.slice();
  }

  _currentPresetIndex = 0;
  attemptResizeAndRedraw();

  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('resize', resizeWindow);

  // Watch zoom changes, but do not trigger another render here
  _fabricCanvas.on('before:render', () => {
    const ctx = _fabricCanvas.contextContainer;
    if (ctx.imageSmoothingEnabled !== false) {
      ctx.imageSmoothingEnabled = false;
    }
    const baseSpacing = _gridPresets[_currentPresetIndex];
    redrawGrid(baseSpacing);
  });
}

export function hideGrid() {
  _gridVisible = false;
  if (_fabricCanvas) {
    _fabricCanvas.backgroundColor = null;
    _fabricCanvas.requestRenderAll();
  }
}

export function showGrid() {
  _gridVisible = true;
  if (_fabricCanvas) {
    const baseSpacing = _gridPresets[_currentPresetIndex];
    redrawGrid(baseSpacing);
    _fabricCanvas.requestRenderAll();
  }
}

export function toggleGridVisibility() {
  if (_gridVisible) {
    hideGrid();
  } else {
    showGrid();
  }
}

/**
 * getGridInfo(canvas)
 * Returns the base spacing in world units and the current zoomed pixel spacing.
 */
export function getGridInfo(canvas) {
  const baseSpacing = _gridPresets[_currentPresetIndex];
  const zoom = canvas.getZoom() || 1;
  const zoomedSpacing = baseSpacing * zoom;
  return { baseSpacing, zoomedSpacing };
}