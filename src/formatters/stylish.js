// import _ from 'lodash';
import statuses from '../../constants.js';

const symbols = ' ';
export default (tree) => {
  const iter = (node, level) => {
    const strings = [];
    node.forEach((subSt) => {
      if (subSt.status === 'changed') {
        console.log(subSt.status);
        strings.push(`-${symbols.repeat(level)}${subSt.key}:${subSt.value1}\n+${symbols.repeat(level)}${subSt.key}:${subSt.value2}`);
      } else {
        strings.push(`${statuses[subSt.status]}${symbols.repeat(level)}${subSt.key}:${subSt.value}`);
      }
    });
    console.log(strings);
  };

  return iter(tree, 1);
};
