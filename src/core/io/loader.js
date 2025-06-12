/*

loader.js
Brian Glen

Handles parsing and validation JSON files loaded into the app.
*/

import Ajv from 'ajv';
import projectSchema from '../schema/project.schema.json';

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(projectSchema);

/**
 * Parses and validates a JSON-only project file.
 * @param {string} content - Raw JSON string from file
 * @returns {{ data?: object, error?: string, details?: object[] }}
 */
export function parseProjectFile(content) {
  let parsed;

  try {
    parsed = JSON.parse(content);
  } catch (err) {
    return { error: 'Invalid JSON format', details: [err.message] };
  }

  const isValid = validate(parsed);
  if (!isValid) {
    return { error: 'Schema validation failed', details: validate.errors };
  }

  return { data: parsed };
}
