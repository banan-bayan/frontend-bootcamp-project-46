import { readFileSync } from 'node:fs';
import { test, expect } from '@jest/globals';
import getStringArr from '../src/index.js';
import { stringArr } from '../constants.js';
// import getParseFile from '../src/parser.js'; , fileYml

const pathTxtStylish = './__fixtures__/tree.txt';
const pathTxtPlain = './__fixtures__/plain.txt';
const pathTxtJson = './__fixtures__/json.txt';

test('testString', () => {
  expect(getStringArr('./__fixtures__/file1.json', './__fixtures__/file2.json')).toEqual(stringArr);
  expect(getStringArr('./__fixtures__/treeFile1.json', './__fixtures__/treeFile2.json')).toEqual(readFileSync(pathTxtStylish, 'utf8'));
  expect(getStringArr('./__fixtures__/treeFile1.json', './__fixtures__/treeFile2.json', 'plain')).toEqual(readFileSync(pathTxtPlain, 'utf8'));
  expect(getStringArr('./__fixtures__/treeFile1.json', './__fixtures__/treeFile2.json', 'json')).toEqual(readFileSync(pathTxtJson, 'utf8'));
});

// test('testFormat', () => {
//   expect(getParseFile('')).toEqual(null);
//   expect(getParseFile('./__fixtures__/file1.yml')).toEqual(fileYml);
// });
