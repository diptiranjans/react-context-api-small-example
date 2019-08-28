const path = require('path');
const hwp = require('html-webpack-plugin');


const settings = {
    distPath: path.join(__dirname, "dist"),
    srcPath: path.join(__dirname, "src")
};

function srcPathExtend(subpath) {
    return path.join(settings.srcPath, subpath)
}

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    module:{
        rules:[{
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel-loader'
        }]
        
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
      }
}