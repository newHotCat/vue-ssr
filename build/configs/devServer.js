const {BUILD_PATH} = require('./constants')
const server = {
    host: '0.0.0.0',
    port: 2666,
    compress: true,
    contentBase: BUILD_PATH,
    historyApiFallback: true,
    disableHostCheck: true,
}

module.exports = server