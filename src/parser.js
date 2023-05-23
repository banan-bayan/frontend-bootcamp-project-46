import yaml from 'js-yaml';

export default (data, extension) => {
  if (extension === 'yml' || extension === 'yaml') return yaml.load(data, 'utf8');
  if (extension === 'json') return JSON.parse(data);

  throw new Error('Unknown format');
};
