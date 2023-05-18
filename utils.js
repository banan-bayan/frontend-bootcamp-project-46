import _ from 'lodash';

export default (obj1, obj2) => {
  const keys = _.union([...Object.keys(obj2), ...Object.keys(obj1)]).sort();
  const resultArr = [];
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

  return resultArr;
};

// const stringify = (data, symbols = ' ', repeat = 1) => {
//   const iter = (node, level) => {
//     if (!_.isObject(node)) {
//       return `${node}`;
//     }
//     const strings = [];
//     const entries = Object.entries(node);
//     for (const [key, value] of entries) {
//       strings.push(`${symbols.repeat(repeat * level)}${key}: ${iter(value, level + 1)}`);
//     }
//     const newSt = (strings.join('\n'));
//     return `{\n${newSt}\n${symbols.repeat(repeat * level - repeat)}}`;
//   };
//   return iter(data, 1);
// };
// console.log(stringify());

// const strings = resultArr.map((subSt) => {
//   if (subSt.status === 'changed') {
//     return `  ${statuses.deleted} ${subSt.key}:
// ${subSt.value1}\n  ${statuses.added} ${subSt.key}: ${subSt.value2}`;
//   }
//   return `  ${statuses[subSt.status]} ${subSt.key}: ${subSt.value}`;
// });
// const obString = `{\n${strings.join('\n')}\n}`;

// return obString;
// };
