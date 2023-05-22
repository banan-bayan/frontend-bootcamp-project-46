// import { expect, test } from '@jest/globals';

// import { fileURLToPath } from 'url';
// import path, { dirname } from 'path';
// import getFormattedTree from '../src/formatters/stylish.js';
import { readFileSync } from 'node:fs';
import { test, expect } from '@jest/globals';
import getStringArr from '../src/index.js';
import { stringArr, fileYml } from '../constants.js';
import getParseFile from '../src/parser.js';

const pathTxt = './__fixtures__/tree.txt';

test('testString', () => {
  expect(getStringArr('./__fixtures__/file1.json', './__fixtures__/file2.json')).toEqual(stringArr);
  expect(getStringArr('./__fixtures__/treeFile1.json', './__fixtures__/treeFile2.json')).toEqual(readFileSync(pathTxt, 'utf8'));
});

test('testFormat', () => {
  expect(getParseFile('')).toEqual(null);
  expect(getParseFile('./__fixtures__/file1.yml')).toEqual(fileYml);
});

// test('testTree', () => {
// expect(getFormattedTree(getStringArr('./__fixtures__/file1.json',
// './__fixtures__/file2.json'))).toEqual(stringTree);
// });
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
// const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
// console.log(readFile);
// readFile('expected_file.json');
