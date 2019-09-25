// vue.config.js
module.exports = {
  devServer: {
    proxy: 'http://localhost:8080'
  },
  css: {
    modules: false, // 启用 CSS modules
    extract: true, // 是否使用css分离插件
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      less: {
          modifyVars: {   // 定制主题
            'primary-color': '#1DA57A',
            'link-color': '#1DA57A',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,
      }
    }
  }
}