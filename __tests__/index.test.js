import { readFileSync } from 'node:fs';
import { test, expect } from '@jest/globals';
import getStringArr from '../src/index.js';
import stringArr from '../__fixtures__/stringArr.js';

const pathTxtStylish = './__fixtures__/tree.txt';
const pathTxtPlain = './__fixtures__/plain.txt';
const pathTxtJson = './__fixtures__/json.txt';
const pathTreeJson1 = './__fixtures__/treeFile1.json';
const pathTreeJson2 = './__fixtures__/treeFile2.json';
const pathTreeYml1 = './__fixtures__/treeFile1.yml';
const pathTreeYml2 = './__fixtures__/treeFile2.yml';
const fileJson1 = './__fixtures__/file1.json';
const fileJson2 = './__fixtures__/file2.json';
const fileYml1 = './__fixtures__/file1.yml';
const fileYml2 = './__fixtures__/file2.yml';

test('testJson', () => {
  expect(getStringArr(fileJson1, fileJson2)).toEqual(stringArr);
  expect(getStringArr(pathTreeJson1, pathTreeJson2)).toEqual(readFileSync(pathTxtStylish, 'utf8'));
  expect(getStringArr(pathTreeJson1, pathTreeJson2, 'json')).toEqual(readFileSync(pathTxtJson, 'utf8'));
});
test('testYml', () => {
  expect(getStringArr(fileYml1, fileYml2)).toEqual(stringArr);
  expect(getStringArr(pathTreeYml1, pathTreeYml2)).toEqual(readFileSync(pathTxtStylish, 'utf8'));
});
test('testPlain', () => {
  expect(getStringArr(pathTreeJson1, pathTreeJson2, 'plain')).toEqual(readFileSync(pathTxtPlain, 'utf8'));
  expect(getStringArr(pathTreeYml1, pathTreeYml2, 'plain')).toEqual(readFileSync(pathTxtPlain, 'utf8'));
});
