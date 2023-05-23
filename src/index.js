// import _ from 'lodash';
import compareObjects from '../utils.js';
import getParseFile from './parser.js';
import getFormattedTree from './formatters/stylish.js';
import getFormattedPlain from './formatters/plain.js';
import getFormattedJson from './formatters/json.js';

const getStringArr = (path1, path2, formatter = 'stylish') => {
  const obj1 = getParseFile(path1);
  const obj2 = getParseFile(path2);
  const compareObjectsInfo = compareObjects(obj1, obj2);
  if (formatter === 'stylish') return getFormattedTree(compareObjectsInfo);
  if (formatter === 'plain') return getFormattedPlain(compareObjectsInfo);
  if (formatter === 'json') return getFormattedJson(compareObjectsInfo);

  return null;
};

export default getStringArr;
