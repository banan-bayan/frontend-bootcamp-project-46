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
