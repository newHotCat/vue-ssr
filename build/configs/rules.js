// 文件处理
const {__DEV__, root} = require('./constants')

let _rules = [
    {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
              js: 'babel-loader'
            }
        }
    },
    {
        test: /\.jsx?$/,
        include: [root('src')],
        exclude: file => (
            /node_modules/.test(file) && !/\.vue\.js/.test(file)
        ),
        use: [
            'babel-loader'
        ]
    },
    {
        test: /.css$/,
        use: [
            'vue-style-loader',
            'css-loader'
        ]
    },
    {
        test: /\.scss$/,
        use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
        ]
    }
]

module.exports = _rules