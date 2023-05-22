// import _ from 'lodash';
import compareObjects from '../utils.js';
import getParseFile from './parser.js';
import getFormattedTree from './formatters/stylish.js';

const getStringArr = (path1, path2, formatter = 'stylish') => {
  const obj1 = getParseFile(path1);
  const obj2 = getParseFile(path2);
  const compareObjectsInfo = compareObjects(obj1, obj2);
  if (formatter === 'stylish') return getFormattedTree(compareObjectsInfo);
  if (formatter === 'plain') return '';
  if (formatter === 'json') return '';

  return null;
};

export default getStringArr;
