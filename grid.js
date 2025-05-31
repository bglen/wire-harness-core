/*

grid.js
Brian Glen

Manages everything related to grids: drawing, cycling presets, responding to resize.

*/

let _fabricCanvas = null;      // will hold the fabric.Canvas reference
let _htmlCanvasElem = null;    // the DOM <canvas> element
let _gridPresets = [20, 50, 100]; // default spacings
let _currentPresetIndex = 0;   // index into _gridPresets
let _gridVisible = true;       // toggle if you later want to hide/show

/**
 * removeExistingGrid()
 *   - Iterates through all objects on the canvas.
 *   - Any object with `isGrid === true` is removed.
 */
function removeExistingGrid() {
  const objs = _fabricCanvas.getObjects().slice(); // copy array to avoid mutation issues
  for (const obj of objs) {
    if (obj.isGrid) {
      _fabricCanvas.remove(obj);
    }
  }
}

/**
 * drawGrid(spacing)
 *  - Removes any previously‐drawn grid group (if present).
 *  - Creates new vertical+horizontal lines at `spacing` px intervals.
 *  - Adds them as a single fabric.Group, sends to back, and re‐renders.
 */
function drawGrid(spacing) {
  // 1) Remove any existing grid‐groups
  removeExistingGrid();

  // 2) Get the canvas dimensions
  const width  = _fabricCanvas.getWidth();
  const height = _fabricCanvas.getHeight();

  // If for some reason width/height is zero, bail out and do not draw:
  if (width <= 0 || height <= 0) {
    console.log("One of the window dimensions was zero or negative!")
    return;
  }

  console.log("Attempting to draw grid with size " + width + " x " + height);

  // 3) Build all lines into an array
  const lines = [];

  // 3a) Vertical lines (x = 0, spacing, 2*spacing, …, ≤ width)
  for (let x = 0; x <= width; x += spacing) {
    lines.push(
      new fabric.Line([x, 0, x, height], {
        stroke: '#e0e0e0',
        strokeWidth: 1,
        selectable: false,
        evented: false,
      })
    );
  }

  // 3b) Horizontal lines (y = 0, spacing, 2*spacing, …, ≤ height)
  for (let y = 0; y <= height; y += spacing) {
    lines.push(
      new fabric.Line([0, y, width, y], {
        stroke: '#e0e0e0',
        strokeWidth: 1,
        selectable: false,
        evented: false,
      })
    );
  }

  // 4) Group them all together (so removal is easy)
  const gridGroup = new fabric.Group(lines, {
    selectable: false,
    evented: false,
  });

  gridGroup.isGrid = true;

  // 5) Add to canvas and send to back
  _fabricCanvas.add(gridGroup);
  _fabricCanvas.insertAt(0, gridGroup);

  // 6) Force a re-render
  _fabricCanvas.requestRenderAll();
}

/**
 * getCanvasPixelSize()
 *   - Uses getBoundingClientRect() to get the on-screen CSS size.
 */
function getCanvasPixelSize() {
  const elem = _fabricCanvas.lowerCanvasEl;
  const rect = elem.getBoundingClientRect();
  const w = Math.floor(rect.width);
  const h = Math.floor(rect.height);
  console.log(`[grid.js] getCanvasPixelSize() = ${w}×${h}`);
  return { width: w, height: h };
}

/**
 * cycleGridPreset()
 *  - Advance _currentPresetIndex to the next preset (wrap around).
 *  - Call drawGrid(...) with the newly‐selected spacing.
 */
function cycleGridPreset() {
  _currentPresetIndex = (_currentPresetIndex + 1) % _gridPresets.length;
  const spacing = _gridPresets[_currentPresetIndex];
  drawGrid(spacing);
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
  drawGrid(spacing);
}

/**
 * wrapper function for initializing window
 */
function resizeWindow() {
    window.requestAnimationFrame(attemptResizeAndRedraw)
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
  _htmlCanvasElem = htmlCanvasElement;

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
