import * as fabric from 'fabric';

let isDragging = false;
let lastPos = { x: 0, y: 0 };

/**
 * initializeCanvasControls(canvas)
 *   - Enables:
 *     • wheel-to-zoom
 *     • alt+drag-to-pan (or remove the altKey check if you prefer click-and-drag always)
 */
export function initializeCanvasControls(canvas) {
  // Zoom on wheel
  // TODO: setting to adjust scroll speed
  canvas.on('mouse:wheel', opt => {
    const delta = opt.e.deltaY;
    let zoom = canvas.getZoom();
    zoom *= 0.997 ** delta;  
    zoom = Math.max(0.1, Math.min(20, zoom));  // clamp
    canvas.zoomToPoint(
      { x: opt.e.offsetX, y: opt.e.offsetY },
      zoom
    );
    opt.e.preventDefault();
    opt.e.stopPropagation();
  });

  // Start panning
  canvas.on('mouse:down', opt => {
    const evt = opt.e;
    // TODO: setting option to require Alt for pan; remove if you want always-on drag
    isDragging = true;
    lastPos = { x: evt.clientX, y: evt.clientY };
  });

  // Panning logic
  canvas.on('mouse:move', opt => {
    if (!isDragging) return;
    const e = opt.e;
    const vpt = canvas.viewportTransform;
    vpt[4] += e.clientX - lastPos.x;
    vpt[5] += e.clientY - lastPos.y;
    canvas.requestRenderAll();
    lastPos = { x: e.clientX, y: e.clientY };
  });

  // End panning
  canvas.on('mouse:up', () => {
    isDragging = false;
  });
}