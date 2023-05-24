import _ from 'lodash';

const stringify = (file) => {
  if (_.isObject(file)) return '[complex value]';
  return (typeof file === 'string') ? `'${file}'` : file;
};
export default (tree) => {
  const iter = (node, ansestry) => {
    const strings = node.map((subSt) => {
      const curentAnsestry = (!ansestry.length) ? `${subSt.key}` : `${ansestry}.${subSt.key}`;
      if (subSt.status === 'changed') {
        return (`Property '${curentAnsestry}' was updated. From ${stringify(subSt.value1)} to ${stringify(subSt.value2)}`);
      } else if (subSt.status === 'added') {
        return (`Property '${curentAnsestry}' was added with value: ${stringify(subSt.value)}`);
      } else if (subSt.status === 'nested') {
        return (`${iter(subSt.children, curentAnsestry)}`);
      } else if (subSt.status === 'deleted') {
        return (`Property '${curentAnsestry}' was removed`);
      }
    });
    const obString = `${strings.join('\n')}`;
    return obString;
  };

  return iter(tree, '');
};
