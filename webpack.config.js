var webpack = require("webpack");
var path = require('path');
var APP_DIR = path.resolve(__dirname,"src");
var OUT_DIR = path.resolve(__dirname,"build");
module.exports = {
  entry : APP_DIR+ "/index.js",
  output: {
           path:OUT_DIR,
           filename:"bundle.js",
           publicPath:"build"
   },    
    devServer:{
      inline:true,
      port:8080,
      hot: true,
      contentBase: path.resolve(__dirname,"public"),
    },
    devtool: 'inline-source-map',
    module:{
    loaders:[ 
        {
              test :/\.js$/,
              exclude:/(node_modules)/,
              loader:[   'babel-loader?' +
                       'babelrc=true,' +
                       'presets[]=es2016,' +
                       'presets[]=stage-0,' +
                       'presets[]=react']
            },
            {
              test:/\.json$/,
              exclude:/(node_modules)/,
              loader:"json-loader"
            },
            {
              test:/\.css$/,
              loader: "style-loader!css-loader!autoprefixer-loader"
            },
             {
              test:/\.scss$/,
              loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
            },
           {
            test: /\.(png|svg|jpg|gif|jpeg|woff|woff2|eot|ttf|otf)$/,
            loader: 'file-loader'
           },
          {
            test: /\.(csv|tsv)$/,
            loader: 'csv-loader'
          },
          {
            test: /\.xml$/,
            loader: 'xml-loader'
          }
    ]
  }
}