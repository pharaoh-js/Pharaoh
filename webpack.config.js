var React   = require('react')
  , path    = require('path')
  , webpack = require('webpack')

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: 'public'
  },
  module: {
    loaders: [{
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.less$/,
        exclude: ['node_modules', 'bower_components'],
        loader: 'style!css!less'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
