let baseUrl = '/api' // 本地代理
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
  case 'dev':
    baseUrl = 'http://testserver.myproject.cn/' // 测试环境url
    break
  case 'pre':
    baseUrl = 'https://pre-server.myproject.cn' // 预上线环境url
    break
  case 'production':
    baseUrl = 'https://icourses.millcloud.cn/' // 生产环境url
    break
}

export default baseUrl
