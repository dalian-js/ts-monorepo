const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',

  entry: {
    index: './src/index.ts',
  },

  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: ['./node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        options: { projectReferences: true },
      },
    ],
  },
};
