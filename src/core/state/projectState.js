/*

projectState.js
Brian Glen

Holds the project state in memory

*/

import { produce } from 'immer';

let state = null;
let isUnsaved = false;

export function setProject(initialState) {
  state = initialState;
  isUnsaved = false;
}

export function getProject() {
  return state;
}

export function hasProject() {
  return state !== null;
}

export function updateProject(updater) {
  if (!state) throw new Error('No project loaded. Call setProject() first.');

  const nextState = produce(state, updater);
  if (nextState !== state) {
    state = nextState;
    isUnsaved = true;
    console.log('[projectState] Project updated', state);
  }
}

export function isDirty() {
  return isUnsaved;
}

export function markSaved() {
  isUnsaved = false;
}
