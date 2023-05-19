import _ from 'lodash';
import statuses from '../../constants.js';

const countRepeat = 2;
const symbols = ' ';
const stringify = (obj, depth) => {
  const iter = (node, level) => {
    if (!_.isObject(node)) {
      return `${node}`;
    }
    const entries = Object.entries(node);
    const result = entries.map(([key, value]) => `${symbols.repeat(countRepeat * level)}${key}: ${iter(value, level + 1)}`);
    const strings = `${result.join('\n')}`;
    return (`{\n${symbols.repeat(countRepeat * level - countRepeat)}${strings}\n${symbols.repeat(countRepeat * level)}}`);
  };
  return iter(obj, depth);
};

export default (tree) => {
  const iter = (node, level) => {
    const strings = [];
    node.forEach((subSt) => {
      if (subSt.status === 'changed') {
        strings.push(`${symbols.repeat(level * countRepeat)}- ${subSt.key}: ${stringify(subSt.value1, level + 1)}\n${symbols.repeat(level * countRepeat)}+ ${subSt.key}: ${stringify(subSt.value2, level + 1)}`);
      } else if (subSt.status === 'nested') {
        strings.push(`${symbols.repeat(level * countRepeat)}${subSt.key}: ${iter(subSt.children, level + 1)}`);
      } else {
        strings.push(`${symbols.repeat(countRepeat * level)}${statuses[subSt.status]} ${subSt.key}: ${stringify(subSt.value, level + 1)}`);
      }
    });
    const obString = `{\n${strings.join('\n')}\n${symbols.repeat(countRepeat * level - countRepeat)}}`;
    return obString;
  };

  return iter(tree, 1);
};
