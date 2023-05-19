// import _ from 'lodash';
import getMediateObject from '../utils.js';
import getParseFile from './parser.js';
import getFormattedTree from './formatters/stylish.js';
// const getStringArr = (path1, path2) => {
//   const obj1 = getParseFile(path1);
//   const obj2 = getParseFile(path2);
//   const resultArr = getMediateObject(obj1, obj2);

//   const strings = resultArr.map((subSt) => {
//     if (subSt.status === 'changed') {
// return `  ${statuses.deleted} ${subSt.key}: ${subSt.value1}\n
// ${statuses.added} ${subSt.key}: ${subSt.value2}`;
//     }
// return `  ${statuses[subSt.status]} ${subSt.key}: ${subSt.value}`;
//   });
//   const obString = `{\n${strings.join('\n')}\n}`;

//   return obString;
// };
// export default getStringArr;

const getStringArr = (path1, path2) => {
  const obj1 = getParseFile(path1);
  const obj2 = getParseFile(path2);
  const result = getMediateObject(obj1, obj2);
  const tree = getFormattedTree(result);

  return tree;
};

export default getStringArr;
