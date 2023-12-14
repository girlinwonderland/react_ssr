

module.exports = {
    //tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        "@babel/preset-typescript",
                        ["@babel/preset-react", { "runtime": "automatic" }],
                        ['@babel/preset-env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js'],
        // preferAbsolute: true,
        // modules: [resolve(__dirname, 'src'), 'node_modules'],
        // mainFiles: ['index'],
        // alias: {},
    }
}
