const path = require('path')
const PAGE = require('./webpack.pages.js')()

module.exports = {
    entry: PAGE.entrys,
    output: PAGE.output,
    module: {
        rules: PAGE.rules,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    plugins: [
        ...PAGE.plugins,
    ],
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                pathRewrite: {"^/api" : ""},
            },
        },
        https: false,
        stats: PAGE.stats,
    },
    devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',
    mode: process.env.NODE_ENV || 'development',
    stats: PAGE.stats,
}
