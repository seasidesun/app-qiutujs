const path = require('path')
const dir = require('node-dir')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

// 只在打包时支持文件命的hash，开发阶段保留原始名称（如果开发阶段也加hash，会使webpack-dev-server缓存过多的文件）
const hashTag = process.env.NODE_ENV !== 'production' ? '' : '-[hash]'

// 默认输出文件配置
const output = {
    filename: `scripts/[name]${hashTag}.js`,
    path: path.join(__dirname, 'dist'),
}

// polyfill垫片
const DEFAULT_ENTRY = ['babel-polyfill'] // 默认支持polyfill，此配置会增加js文件大小，但是很值

// 日志打印配置：只打印错误、modules列表、一些基本信息，简化日志
const stats = {
    all: false,
    assets: true,
    cached: true,
    builtAt: true,
    modules: true,
    maxModules: 0,
    errors: true,
    warnings: true,
    moduleTrace: true,
    errorDetails: true,
    assetsSort: "chunks",
}

const rules = [
    {
        test: /.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                css: ExtractTextPlugin.extract({fallback: 'vue-style-loader', use: 'css-loader?importLoaders=1&sourceMap=true&minimize=true'}),
                scss: ExtractTextPlugin.extract({fallback: 'vue-style-loader', use: 'css-loader?importLoaders=1&sourceMap=true&minimize=true!sass-loader'}),
            },
        },
    },
    {
        test:   /.hbs$/,
        loader: "handlebars-loader",
    },
    {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: [path.resolve(__dirname, 'node_modules/'), path.resolve(__dirname, 'dist/')],
        include: path.resolve(__dirname, 'src/'),
    },
    {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader?importLoaders=1&sourceMap=true&minimize=true!postcss-loader',
        })
    },
    {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader?importLoaders=1&sourceMap=true&minimize=true!postcss-loader!sass-loader',
        })
    },
    {
        test:   /\.(png|gif|jpe?g|svg)$/i,
        loader: "url-loader?limit=8192&name=assets/[name]-[hash:5].[ext]",
    },
]

const plugins = [
    new ExtractTextPlugin(`styles/[name]${hashTag}.css`), //抽离css文件
]
const defaultConfig = {
    stats,
    rules,
    output,
    plugins,
}
const getConfig = () => {
    // 获取页面目录下的文件夹和html文件
    let pages = process.env.pages && process.env.pages.split('&') || []
    let pagesDirList = dir.files(path.resolve(__dirname, 'src/pages'), 'dir', null, { shortName: true, sync: true, recursive: false })
    let pagesHtmlList = dir.files(path.resolve(__dirname, 'src/pages'), 'file', null, { shortName: true, sync: true, recursive: false })
    pages = pages.length ? pages : pagesDirList

    let ret = {
        ...defaultConfig,
        entrys: {},
    }

    const d = new Date()
    const time = `${d.toLocaleString()}`
    // 给页面配置htmlWebpackPlugin
    pages.forEach((page) => {
        if (!pagesDirList.includes(page)) return

        // 入口
        ret.entrys[page] = DEFAULT_ENTRY.concat(path.join(__dirname, `src/pages/${page}/index.js`))

        // 生成对应html
        ret.plugins.push(new htmlWebpackPlugin({
            template: pagesHtmlList.includes(`${page}.html`) ? `./src/pages/${page}.html` : `./src/template.html`,
            filename: `${page}.html`,
            title: `${page}`,
            chunks: [`${page}`],
            date: time,
            minify: {
                minifyJS: true,
                minifyCSS: true,
            },
        }))
    })

    return ret
}

module.exports = getConfig
