/*
 statusBar.js
 Brian Glen
 Handles the canvas status bar on the bottom of the window.
*/

import { getGridInfo } from './grid.js';

/**
 * initializeStatusBar(canvas, statusBarId)
 *   canvas: Fabric.js Canvas instance
 *   statusBarId: ID of the status bar DOM element
 */
export function initializeStatusBar(canvas, statusBarId = 'status-bar') {
  const statusBar = document.getElementById(statusBarId);
  if (!statusBar) return;

  let lastPointer = null;

  // Update status bar with base grid spacing and integer cell coords
  function updateStatus(pt) {
    const { baseSpacing } = getGridInfo(canvas);
    const gridX = Math.floor(pt.x / baseSpacing);
    const gridY = Math.floor(pt.y / baseSpacing);

    statusBar.textContent =
      `Grid Size: ${baseSpacing} | ` +
      `X: (${gridX}, Y: ${gridY})`;
  }

  // Track pointer movement
  canvas.on('mouse:move', opt => {
    lastPointer = canvas.getPointer(opt.e);
    updateStatus(lastPointer);
  });

  // Also refresh on any render (e.g., when pressing 'g')
  canvas.on('after:render', () => {
    if (lastPointer) {
      updateStatus(lastPointer);
    }
  });
}