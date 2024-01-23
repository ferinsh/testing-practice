const path = require('path');

module.exports = {
  entry: './src/capitalize.test.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      util: require.resolve("util/"),
      path: require.resolve("path-browserify")
    }
}
};