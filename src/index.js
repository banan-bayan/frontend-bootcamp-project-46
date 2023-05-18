import statuses from '../constants.js';
import getMediateObject from '../utils.js';
import getParseFile from './parser.js';

const getStringArr = (path1, path2) => {
  const obj1 = getParseFile(path1);
  const obj2 = getParseFile(path2);
  const resultArr = getMediateObject(obj1, obj2);
  const strings = resultArr.map((subSt) => {
    if (subSt.status === 'changed') {
      return `  ${statuses.deleted} ${subSt.key}: ${subSt.value1}\n  ${statuses.added} ${subSt.key}: ${subSt.value2}`;
    }
    return `  ${statuses[subSt.status]} ${subSt.key}: ${subSt.value}`;
  });
  const obString = `{\n${strings.join('\n')}\n}`;

  return obString;
};
export default getStringArr;
// const stringify = (data, symbols = ' ', repeat = 1) => {
//    const iter = (node, level) => {
//      if (!_.isObject(node)) {
//        return `${node}`;
//      }
//      const strings = [];
//      const entries = Object.entries(node);

//      for (const [key, value] of entries) {
//        strings.push(`${symbols.repeat(repeat * level)}${key}: ${iter(value, level + 1)}`);
//      }
//      const newSt = (strings.join('\n'));
//      return `{\n${newSt}\n${symbols.repeat(repeat * level - repeat)}}`;
//    };
//    return iter(data, 1);
//  };
//   stringify(result);
