const { constants: {__DEV__, BUILD_PATH, ROOT_PATH}, devServer, entry, rules, plugins } = require('./configs')

// 设置开发时源代码映射
const devtool = __DEV__ ? 'cheap-module-eval-source-map' : 'source-map'
const mode = __DEV__ ? 'development' : 'production'

const webpackConfig = {
    mode,
    devtool,
    devServer,
    context: ROOT_PATH,
    entry: entry.apps,
    output: {
        path: BUILD_PATH,
        filename: '[name].js',
        chunkFilename: `[name].chunk.js`,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.json', '.vue']
    },
    module: {
        // 定义loader
        rules
    },
    plugins
}

module.exports = webpackConfig;