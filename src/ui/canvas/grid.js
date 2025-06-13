/*

grid.js
Brian Glen

Manages everything related to grids: drawing, cycling presets, responding to resize.

*/

import * as fabric from 'fabric';

let _fabricCanvas = null;           // will hold the fabric.Canvas reference
let _gridPresets = [20, 50, 100];   // default spacings
let _currentPresetIndex = 0;        // index into _gridPresets
let _gridVisible = true;            // toggle if you later want to hide/show
let _resizeTimeout = null;          // resize de-bounce time to reduce workload

/**
 * applyGridPattern(spacing)
 *   - Uses makeGridPatternTile(...) to get a small canvas tile.
 *   - Wraps that into a Fabric.Image or Fabric.Pattern and sets it as the
 *     canvas background (tiled). No need to manually iterate lines.
 */
function applyGridPattern(spacing) {
    if (!_fabricCanvas) return;

    // 1) Create the tile
    const tileElem = makeGridPatternTile(spacing, 'rgba(100, 150, 200, 0.25)', 1);

    // 2) Create a Fabric.Pattern directly from the tile element
    const pattern = new fabric.Pattern({
        source: tileElem,
        repeat: 'repeat'
    });

    // 3) Assign the Pattern to canvas.backgroundColor
    //    Then call renderAll() so it takes effect immediately
    _fabricCanvas.backgroundColor = pattern;
    _fabricCanvas.renderAll();
}

/**
 * getCanvasPixelSize()
 *   - Uses getBoundingClientRect() to get the on-screen CSS size.
 */
function getCanvasPixelSize() {
  const elem = _fabricCanvas.lowerCanvasEl;
  const rect = elem.getBoundingClientRect();
  return {
     width: Math.floor(rect.width),
     height: Math.floor(rect.height),
    };
}

/**
 * cycleGridPreset()
 *  - Advance _currentPresetIndex to the next preset (wrap around).
 *  - Call drawGrid(...) with the newly‐selected spacing.
 */
function cycleGridPreset() {
  _currentPresetIndex = (_currentPresetIndex + 1) % _gridPresets.length;
  const spacing = _gridPresets[_currentPresetIndex];
  applyGridPattern(spacing);
  console.log(`[grid.js] Grid spacing changed to ` + spacing);
}

/**
 * onKeyDown(event)
 *  - If user presses “g” or “G”, cycle the grid preset.
 *  - (You could expand this later to allow “h” to hide/show, etc.)
 */
function onKeyDown(e) {
  if (e.key === 'g' || e.key === 'G') {
    e.preventDefault();
    cycleGridPreset();
  }
}

/**
 * attemptResizeAndRedraw()
 *   - Called inside requestAnimationFrame to let layout stabilize.
 *   - Reads htmlCanvasElem.clientWidth/clientHeight. If valid (>0),
 *     sets Fabric’s width/height and redraws. If still zero, queues
 *     another rAF until it becomes positive.
 */
function attemptResizeAndRedraw() {
  const { width: w, height: h } = getCanvasPixelSize();
  console.log(`[grid.js] resizeAndDraw: <canvas> is ${w}×${h}`);

  if (w <= 0 || h <= 0) {
    console.warn("[grid.js] resizeAndDraw: size not ready, skipping.");
    return;
  }

  // 1) Update Fabric’s drawing buffer to match the actual CSS size
  _fabricCanvas.setWidth(w);
  _fabricCanvas.setHeight(h);

  // 2) Draw the grid at the current preset spacing
  const spacing = _gridPresets[_currentPresetIndex];
  applyGridPattern(spacing);
}

/**
 * wrapper function for initializing window
 */
function resizeWindow() {
   clearTimeout(_resizeTimeout);
  _resizeTimeout = setTimeout(() => {
    window.requestAnimationFrame(attemptResizeAndRedraw);
  }, 100);
}

/**
 * makeGridPatternTile(spacing, color, lineWidth)
 *   - spacing:   the width/height of the tile in CSS pixels (e.g. 20, 50).
 *   - color:     stroke color for the grid lines (e.g. "#e0e0e0").
 *   - lineWidth: width of the grid lines in pixels (usually 1).
 *
 * Returns a native HTMLCanvasElement of size (spacing × spacing),
 * with a vertical line at x = 0 and a horizontal line at y = 0,
 * so that when tiled, it forms a continuous grid.
 */
export function makeGridPatternTile(spacing = 20, color = '#rgba(100, 150, 200, 0.08)', lineWidth = 1) {
  // 1) Create an off-screen canvas
  const tile = document.createElement('canvas');
  tile.width  = spacing;
  tile.height = spacing;
  const ctx = tile.getContext('2d');

  // 2) Clear to transparent
  ctx.clearRect(0, 0, spacing, spacing);

  // 3) Draw the vertical line on the left edge
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth   = lineWidth;
  // If lineWidth is 1, drawing at x = 0.5 centers the 1px exactly
  const half = lineWidth / 2;
  ctx.moveTo(half, 0);
  ctx.lineTo(half, spacing);
  ctx.stroke();

  // 4) Draw the horizontal line on the top edge
  ctx.beginPath();
  ctx.moveTo(0, half);
  ctx.lineTo(spacing, half);
  ctx.stroke();

  // 5) Return the canvas element
  return tile;
}

/**
 * initializeGrid(fabricCanvas, htmlCanvasElement, presets?)
 *  - fabricCanvas:   the already‐constructed fabric.Canvas instance
 *  - htmlCanvasElement: the actual <canvas> DOM node (so we can read its size)
 *  - presets:       (optional) an array of integer spacings, e.g. [10, 25, 50]
 *
 * This function:
 *  1) Stores references internally.
 *  2) Overrides the default presets if a user‐provided array is passed.
 *  3) Draws the initial grid (at presets[0]).
 *  4) Hooks up window‐level listeners for “keydown” and “resize”.
 */
export function initializeGrid(fabricCanvas, htmlCanvasElement, presets = null) {
  _fabricCanvas = fabricCanvas;

  if (Array.isArray(presets) && presets.length > 0) {
    _gridPresets = presets.slice(); // clone user’s array
  }

  // Reset to the first preset
  _currentPresetIndex = 0;

  // 3) Schedule the very first resize+redraw on next frame
  resizeWindow()
  console.log("[grid.js] initializeGrid(): scheduled first draw.")

  // Hook up keydown and resize
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('resize', resizeWindow);
}

// (Optional extra export if you want a manual function to force a redraw or hide/show.)
export function hideGrid() {
  if (gridGroup) {
    gridGroup.set({ visible: false });
    _fabricCanvas.requestRenderAll();
    _gridVisible = false;
  }
}

export function showGrid() {
  if (_gridGroup) {
    _gridGroup.set({ visible: true });
    _fabricCanvas.requestRenderAll();
    _gridVisible = true;
  }
}

export function toggleGridVisibility() {
  if (!_gridGroup) return;
  _gridGroup.set({ visible: !_gridVisible });
  _fabricCanvas.requestRenderAll();
  _gridVisible = !_gridVisible;
}
