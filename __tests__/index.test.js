// import { expect, test } from '@jest/globals';

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'node:fs';
import { test, expect } from '@jest/globals';
import getStringArr from '../src/index.js';
import { stringArr } from '../constants.js';

test('stringArr', () => {
  expect(getStringArr('./__fixtures__/file1.json', './__fixtures__/file2.json')).toEqual(stringArr);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
console.log(readFile);
// readFile('expected_file.json');
