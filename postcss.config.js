module.exports = {
    ident: 'postcss',
    plugins: [
        require('autoprefixer')({
            "browsers": [
                "ie >= 9",
                "last 2 versions",
            ]
        })
    ]
}
