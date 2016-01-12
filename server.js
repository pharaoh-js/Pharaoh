var webpack          = require('webpack')
  , WebpackDevServer = require('webpack-dev-server')
  , config           = require('./webpack.config')
  , port             = 9090

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath
, hot: true
, quiet: true
, devtool: 'cheap-module-eval-source-map'
, historyApiFallback: true
}).listen(port, 'localhost', function(err, result){
  if (err){
    console.log(err)
  }
  console.log('webpack server running on ' + port)
})
