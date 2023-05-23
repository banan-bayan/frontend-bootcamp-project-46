import path from 'node:path';
import { readFileSync } from 'node:fs';
import compareObjects from './compareObjects.js';
import getParseFile from './parser.js';
import getFormatted from './formatters/getFormattedTree.js';

const getStringArr = (path1, path2, formatter = 'stylish') => {
  const data1 = readFileSync(path1, 'utf-8');
  const data2 = readFileSync(path2, 'utf-8');

  const extension1 = path.extname(path1).slice(1);
  const extension2 = path.extname(path2).slice(1);

  const obj1 = getParseFile(data1, extension1);
  const obj2 = getParseFile(data2, extension2);

  const compareObjectsInfo = compareObjects(obj1, obj2);
  const result = getFormatted(compareObjectsInfo, formatter);

  return result;
};

export default getStringArr;
