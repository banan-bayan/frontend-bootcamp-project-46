import _ from 'lodash';
// import statuses from '../../constants.js';

const space = 4;
const sign = ' ';
const statuses = {
  unchanged: ' ',
  deleted: '-',
  added: '+',
};

const stringify = (obj, depth) => {
  const iter = (node, level) => {
    if (!_.isObject(node)) return `${node}`;

    const entries = Object.entries(node);
    const result = entries.map(([key, value]) => `${sign.repeat(space * level + space)}${key}: ${iter(value, level + 1)}`);
    const strings = `${result.join('\n')}`;
    return (`{\n${strings}\n${sign.repeat(space * level)}}`);
  };
  return iter(obj, depth);
};

export default (tree) => {
  const iter = (node, level) => {
    const strings = node.map((subSt) => {
      if (subSt.status === 'changed') {
        return (`${sign.repeat(space * level
          + (space / 2))}- ${subSt.key}: ${stringify(subSt.value1, level + 1)}\n${sign.repeat(space * level
          + (space / 2))}+ ${subSt.key}: ${stringify(subSt.value2, level + 1)}`);
      }
      if (subSt.status === 'nested') {
        return (`${sign.repeat(space + level * space)}${subSt.key}: ${iter(subSt.children, level + 1)}`);
      }
      return (`${sign.repeat(space * level
        + (space / 2))}${statuses[subSt.status]} ${subSt.key}: ${stringify(subSt.value, level + 1)}`);
    });
    const obString = `{\n${strings.join('\n')}\n${sign.repeat(level * space)}}`;
    return obString;
  };

  return iter(tree, 0);
};
