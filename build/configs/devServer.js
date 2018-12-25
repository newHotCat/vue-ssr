const {BUILD_PATH} = require('./constants')
const server = {
    allowedHosts: [
        'www.vuejs-ssr.com',
    ],
    port: 2666,
    compress: true,
    contentBase: BUILD_PATH,
    historyApiFallback: true,
    // 现在是个bug 需要添加
    disableHostCheck: true,
}

module.exports = server