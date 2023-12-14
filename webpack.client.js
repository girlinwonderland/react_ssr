const { resolve } = require('path');
const { merge }  = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    mode: 'development',
    // root file of our server app
    entry: './src/client/client.js',
    // говорим вебпаку где будет лежать итоговый файл
    output: {
        filename: "bundle.js",
        path: resolve(__dirname, 'public')
    },
};

module.exports = merge(baseConfig, config);
