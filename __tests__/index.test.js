// import { expect, test } from '@jest/globals';

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'node:fs';
import { test, expect } from '@jest/globals';
import getStringArr from '../src/index.js';
import { fileYml, stringArr } from '../constants.js';
import getParseFile from '../src/parser.js';

test('testString', () => {
  expect(getStringArr('./__fixtures__/file1.json', './__fixtures__/file2.json')).toEqual(stringArr);
});

test('testFormat', () => {
  expect(getParseFile('')).toEqual(null);
  expect(getParseFile('./__fixtures__/file1.yml')).toEqual(fileYml);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
console.log(readFile);
// readFile('expected_file.json');
