const statuses = {
  unchanged: ' ',
  deleted: '-',
  added: '+',
};

export const stringArr = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

export const fileYml = {
  follow: false,
  host: 'hexlet.io',
  proxy: '123.234.53.22',
  timeout: 50,
};

export default statuses;