import formatStylish from './stylish.js';
import formatPlain from './plain.js';
import formatJson from './json.js';

export default (obj, format) => {
  if (format === 'stylish') return formatStylish(obj);
  if (format === 'plain') return formatPlain(obj);
  if (format === 'json') return formatJson(obj);

  throw new Error('Error: unknown format');
};
