module.exports = {
  root: true,
  env: {
    node: true //预定义的全局变量，这里是浏览器环境
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // 这里写自定义规则
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'camelcase': 'off',
    'no-extra-semi': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint' //解析器，这里我们使用babel-eslint
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // extends: 'standard', //扩展，可以通过字符串或者一个数组来扩展规则
  // required to lint *.vue files
  plugins: [
    // 如果没有安装此插件，可以使用yarn add eslint-plugin-html或者npm install eslint-plugin-html安装后再使用
    'html' // 插件，此插件用于识别文件中的js代码，没有MIME类型标识没有script标签也可以识别到，因此拿来识别.vue文件中的js代码
  ]
}
