import { readFileSync } from 'node:fs';
import { test, expect } from '@jest/globals';
import getStringArr from '../src/index.js';

const pathTxtStylish = './__fixtures__/tree.txt';
const pathTxtPlain = './__fixtures__/plain.txt';
const pathTxtJson = './__fixtures__/json.txt';
const pathTreeJson1 = './__fixtures__/treeFile1.json';
const pathTreeJson2 = './__fixtures__/treeFile2.json';
const pathTreeYml1 = './__fixtures__/treeFile1.yml';
const pathTreeYml2 = './__fixtures__/treeFile2.yml';

test.each([
  [pathTreeJson1, pathTreeJson2, 'stylish', pathTxtStylish],
  [pathTreeJson1, pathTreeJson2, 'json', pathTxtJson],
  [pathTreeYml1, pathTreeYml2, 'stylish', pathTxtStylish],
])('testTree(%p, %p, %p)', (file1, file2, format, expected) => {
  expect(getStringArr(file1, file2, format)).toEqual(readFileSync(expected, 'utf-8'));
});
test.each([
  [pathTreeJson1, pathTreeJson2, 'plain', pathTxtPlain],
  [pathTreeYml1, pathTreeYml2, 'plain', pathTxtPlain],
])('testPlain(%p, %p, %p)', (file1, file2, format, expected) => {
  expect(getStringArr(file1, file2, format)).toEqual(readFileSync(expected, 'utf-8'));
});
