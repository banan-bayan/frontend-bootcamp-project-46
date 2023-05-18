import path from 'node:path';
import { readFileSync } from 'node:fs';
import yaml from 'js-yaml';

export default (myPath) => {
  if (path.extname(myPath) === '.json') {
    return JSON.parse(readFileSync(myPath, 'utf-8'));
  }
  if (path.extname(myPath) === '.yml') {
    return yaml.load(readFileSync(myPath, 'utf8'));
  }

  return null;
};
