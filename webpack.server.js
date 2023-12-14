const { resolve } = require('path');
const { merge }  = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    mode: 'development',
    // говорим вебпаку что собираем бандл для nodeJs а не для браузера
    target: 'node',
    // root file of our server app
    entry: './src/server.js',
    // говорим вебпаку где будет лежать итоговый файл
    output: {
        filename: "bundle.js",
        path: resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);
