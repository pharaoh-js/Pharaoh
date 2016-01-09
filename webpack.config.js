var React   = require('react')
  , path    = require('path')
  , webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:9090'
  , 'webpack/hot/only-dev-server'
  , './src/index.jsx'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: 'public'
  },
  module: {
    loaders: [{
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.less$/,
        exclude: ['node_modules', 'bower_components'],
        loader: 'style!css!less'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
