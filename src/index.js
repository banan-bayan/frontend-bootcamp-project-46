import _ from 'lodash';
import { readFileSync } from 'node:fs';

export default (path1, path2) => {
  const json1 = readFileSync(path1, 'utf-8');
  const json2 = readFileSync(path2, 'utf-8');
  const obj1 = JSON.parse(json1);
  const obj2 = JSON.parse(json2);
  const resultArr = [];

  const keys = _.union([...Object.keys(obj2), ...Object.keys(obj1)]).sort();

  keys.forEach((key) => {
    if (obj1[key] === obj2[key]) resultArr.push({ status: 'unchanged', key, value: obj1[key] });
    if (_.has(obj1, key) && !_.has(obj2, key)) resultArr.push({ status: 'deleted', key, value: obj1[key] });
    if (!_.has(obj1, key) && _.has(obj2, key)) resultArr.push({ status: 'added', key, value: obj2[key] });
    if (_.has(obj1, key) && _.has(obj2, key) && obj1[key] !== obj2[key]) {
      resultArr.push({
        status: 'changed', key, value1: obj1[key], value2: obj2[key],
      });
    }
  });
  const statuses = {
    unchanged: ' ',
    deleted: '-',
    added: '+',
  };
  const strings = resultArr.map((subSt) => {
    if (subSt.status === 'changed') {
      return `${statuses.deleted} ${subSt.key}: ${subSt.value1} \n${statuses.added} ${subSt.key}: ${subSt.value2}`;
    }
    return `${statuses[subSt.status]} ${subSt.key}: ${subSt.value}`;
  });
  const obString = `{\n${strings.join('\n')} \n}`;
  console.log(obString);
};

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
