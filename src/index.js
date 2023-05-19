// import _ from 'lodash';
import compareObjects from '../utils.js';
import getParseFile from './parser.js';
import getFormattedTree from './formatters/stylish.js';

const getStringArr = (path1, path2) => {
  const obj1 = getParseFile(path1);
  const obj2 = getParseFile(path2);
  const result = compareObjects(obj1, obj2);
  const tree = getFormattedTree(result);

  return tree;
};

export default getStringArr;
