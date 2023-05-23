import { readFileSync } from 'node:fs';
import { test, expect } from '@jest/globals';
import getStringArr from '../src/index.js';
import { stringArr } from '../constants.js';

const pathTxtStylish = './__fixtures__/tree.txt';
const pathTxtPlain = './__fixtures__/plain.txt';
const pathTxtJson = './__fixtures__/json.txt';
const pathTreeJson1 = './__fixtures__/treeFile1.json';
const pathTreeJson2 = './__fixtures__/treeFile2.json';
const fileJson1 = './__fixtures__/file1.json';
const fileJson2 = './__fixtures__/file2.json';

test('testString', () => {
  expect(getStringArr(fileJson1, fileJson2)).toEqual(stringArr);
  expect(getStringArr(pathTreeJson1, pathTreeJson2)).toEqual(readFileSync(pathTxtStylish, 'utf8'));
  expect(getStringArr(pathTreeJson1, pathTreeJson2, 'plain')).toEqual(readFileSync(pathTxtPlain, 'utf8'));
  expect(getStringArr(pathTreeJson1, pathTreeJson2, 'json')).toEqual(readFileSync(pathTxtJson, 'utf8'));
});
