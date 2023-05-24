import _ from 'lodash';

const compareObjects = (obj1, obj2) => {
  const keys = _.union([...Object.keys(obj2), ...Object.keys(obj1)]).sort();
  const resultArr = keys.map((key) => {
    if (_.isObject(obj1[key]) && (_.isObject(obj2[key]))) {
      return ({ status: 'nested', key, children: compareObjects(obj1[key], obj2[key]) });
    }
    if (obj1[key] === obj2[key]) {
      return ({ status: 'unchanged', key, value: obj1[key] });
    }
    if (_.has(obj1, key) && !_.has(obj2, key)) {
      return ({ status: 'deleted', key, value: obj1[key] });
    }
    if (!_.has(obj1, key) && _.has(obj2, key)) {
      return ({ status: 'added', key, value: obj2[key] });
    }
    if (_.has(obj1, key) && _.has(obj2, key) && obj1[key] !== obj2[key]) {
      return ({
        status: 'changed', key, value1: obj1[key], value2: obj2[key],
      });
    }
  });

  return resultArr;
};
export default compareObjects;
