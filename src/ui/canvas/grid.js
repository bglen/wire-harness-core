/*
 grid.js
 Brian Glen

 Manages grid drawing with major and minor lines, cycling presets, and responsive resize.
*/

import * as fabric from 'fabric';

let _fabricCanvas = null;
let _gridPresets = [20, 50, 100];   // major grid spacings
let _currentPresetIndex = 0;
let _gridVisible = true;
let _resizeTimeout = null;

/**
 * applyGridPattern(spacing)
 *   - spacing: major grid spacing in CSS pixels.
 *   - draws a tiled pattern of major and minor grid lines.
 */
function applyGridPattern(spacing) {
  if (!_fabricCanvas) return;

  const majorColor = 'rgba(100, 150, 200, 0.25)';
  const minorColor = 'rgba(100, 150, 200, 0.10)';
  const lineWidthMajor = 1;
  const lineWidthMinor = 0.5;
  const subdivisions = 5;

  const tileElem = makeGridPatternTile(
    spacing,
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
  _fabricCanvas.renderAll();
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
  const spacing = _gridPresets[_currentPresetIndex];
  applyGridPattern(spacing);
  console.log(`[grid.js] Grid spacing changed to ${spacing}`);
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

  const spacing = _gridPresets[_currentPresetIndex];
  applyGridPattern(spacing);
}

function resizeWindow() {
  clearTimeout(_resizeTimeout);
  _resizeTimeout = setTimeout(() => {
    window.requestAnimationFrame(attemptResizeAndRedraw);
  }, 100);
}

/**
 * makeGridPatternTile(majorSpacing, majorColor, minorColor, lineWidthMajor, lineWidthMinor, subdivisions)
 *   - majorSpacing: size of the tile (pixel), distance between major lines.
 *   - majorColor: CSS stroke color for major lines.
 *   - minorColor: CSS stroke color for minor lines.
 *   - lineWidthMajor: stroke width for major lines.
 *   - lineWidthMinor: stroke width for minor lines.
 *   - subdivisions: number of minor cells between major lines.
 *
 * Returns an off-screen canvas element tiled for the background.
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
  ctx.clearRect(0, 0, majorSpacing, majorSpacing);

  // Draw minor grid lines
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
  resizeWindow();
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('resize', resizeWindow);
}

export function hideGrid() {
  _gridVisible = false;
  if (_fabricCanvas) {
    _fabricCanvas.backgroundColor = null;
    _fabricCanvas.renderAll();
  }
}

export function showGrid() {
  _gridVisible = true;
  if (_fabricCanvas) {
    applyGridPattern(_gridPresets[_currentPresetIndex]);
  }
}

export function toggleGridVisibility() {
  if (_gridVisible) {
    hideGrid();
  } else {
    showGrid();
  }
}
