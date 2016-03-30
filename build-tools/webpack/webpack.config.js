var webpack      = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var map          = require('postcss-map');


var path = require('path');
var rootDir = path.resolve(__dirname + '../../../');

var cssDir = path.resolve(rootDir + '/styles/');
var outputDir = path.resolve(rootDir + '/dist/');
var configDir = path.resolve(cssDir + '/config/');
var configVariables = require(configDir);


// Maps options
var opts = {
    basePath: cssDir,
    maps: configVariables
};

module.exports = {
    entry: rootDir + '/entry.js',
    output: {
        path: outputDir,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test:   /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', '!css-loader!postcss-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ],
    postcss: function () {
        return [map(opts),precss, autoprefixer];
    }
}