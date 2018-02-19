const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var path = require('path');

module.exports = merge(common, {
    devServer: {
        inline: true,
        port: 8080,
        hot: true,
        contentBase: path.resolve(__dirname, "public"),
        historyApiFallback: true,
    },
    devtool: 'inline-source-map',
});
