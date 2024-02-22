const pkg = require('./package.json');

module.exports = {
  input: 'dist/index.js',

  external: ['path', 'node-sass', 'fs', 'util'],

  output: [
    {
      format: 'cjs',
      file: pkg.main,
    },
    {
      format: 'es',
      file: pkg.module,
    },
  ],
};
