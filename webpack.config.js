var React   = require('react')
  , path    = require('path')
  , webpack = require('webpack')

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: 'http:127.0.0.1:9090/'
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
  // externals: {
  //     //don't bundle the 'react' npm package with our bundle.js
  //     //but get it from a global 'React' variable
  //     'react': 'React'
  // },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
