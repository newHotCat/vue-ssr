const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const {TEMPLATE_PATH} = require('./constants')
const plugins = [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        template: TEMPLATE_PATH
    })
]

module.exports = plugins