const devServer = require('./devServer')
const entry = require('./entry')
const alias = require('./alias')
const rules = require('./rules')
const plugins = require('./plugins')
const constants = require('./constants')

module.exports = {
    devServer,
    entry,
    alias,
    rules,
    plugins,
    constants
}