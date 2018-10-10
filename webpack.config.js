const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    polyfills: './src/polyfills.js',
    index: './src/index.js'
   },
    output: {
     filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new webpack.ProvidePlugin({
        join: ['lodash', 'join']
      })
    ]
  };