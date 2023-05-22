import _ from 'lodash';
import statuses from '../../constants.js';

const spaces = 2;
const sign = ' ';
const stringify = (obj, depth) => {
  const iter = (node, level) => {
    if (!_.isObject(node)) {
      return `${node}`;
    }
    const entries = Object.entries(node);
    const result = entries.map(([key, value]) => `${sign.repeat(spaces * level)}${key}: ${iter(value, level + 1)}`);
    const strings = `${result.join('\n')}`;
    return (`{\n${sign.repeat(spaces * level - spaces)}${strings}\n${sign.repeat(spaces * level)}}`);
  };
  return iter(obj, depth);
};

export default (tree) => {
  const iter = (node, level) => {
    const strings = [];
    node.forEach((subSt) => {
      if (subSt.status === 'changed') {
        strings.push(`${sign.repeat(spaces * level)}- ${subSt.key}: ${stringify(subSt.value1, level + 1)}\n
        ${sign.repeat(spaces * level)}+ ${subSt.key}: ${stringify(subSt.value2, level + 1)}`);
      } else if (subSt.status === 'nested') {
        strings.push(`${sign.repeat(spaces * level)}${subSt.key}: ${iter(subSt.children, level + 1)}`);
      } else {
        strings.push(`${sign.repeat(spaces * level)}${statuses[subSt.status]} ${subSt.key}: ${stringify(subSt.value, level + 1)}`);
      }
    });
    const obString = `{\n${strings.join('\n')}\n${sign.repeat(spaces * level - spaces)}}`;
    return obString;
  };

  return iter(tree, 1);
};
