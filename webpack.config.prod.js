module.exports = {
  devtool : 'cheap-module-eval-inline-source-map'
, entry   : './src/index.jsx'
, output  : {
    filename          : 'bundle.js'
  , path              : './public'
  , publicPath        : 'http://pharaoh.js.org'
  }
, module : {
    loaders : [{
        test          : /\.jsx$/
      , exclude       : /node_modules/
      , loaders       : ['react-hot', 'babel']
      }
    , {
        test          : /\.less$/
      , exclude       : ['node_modules', 'bower_components']
      , loader        : 'style!css!less'
      }
    ]
  }
, resolve : {
    extensions : ['', '.js', '.jsx']
  }
}
