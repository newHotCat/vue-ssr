const path = require('path')

const ROOT_PATH = path.resolve(process.cwd())
// bind方法会返回一个方法，参数1 是this; 参数2是 join函数、参数的一个参数
const root = path.join.bind(path, ROOT_PATH)
const BUILD_PATH = root('dist') 
const NODE_ENV = process.env.NODE_ENV || 'development'
const __DEV__ = NODE_ENV === 'development' 

// 模板地址
const TEMPLATE_PATH = root('src/index.html')

module.exports = {
    root,
    ROOT_PATH,
    BUILD_PATH,
    NODE_ENV,
    __DEV__,
    TEMPLATE_PATH
}
