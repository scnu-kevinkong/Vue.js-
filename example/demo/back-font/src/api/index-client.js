import axios from 'axios'
import qs from 'qs'
import config from './config-client'
import { Loading, Message } from 'element-ui'
import Vue from 'vue'
Vue.use(Loading)
Vue.prototype.$message = Message
var fullScreenLoading
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
const showMessage = function (message, type, showClose) {
  Vue.prototype.$message({
    showClose: showClose,
    type: type,
    message: message
  })
}
axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))

function checkStatus (response) {
  if (response.status === 200 || response.status === 304) {
    return response
  } else {
    setTimeout(() => {
      fullScreenLoading.close()
    }, 500)
    return {
      data: {
        code: -404,
        message: response.data.msg || response.data.errormsg || response.data.errorMsg,
        data: ''
      }
    }
  }
}
function checkCode (response) {
  console.log('checkCode', response)
  if (response.data.status === -500) {
    setTimeout(() => {
      fullScreenLoading.close()
      window.location.href = '/login'
    }, 500)
  } else if (response.data.status === -400) {
    setTimeout(() => {
      fullScreenLoading.close()
      window.location.href = '/'
    }, 500)
  } else if (response.data.status !== 1) {
    setTimeout(() => {
      fullScreenLoading.close()
    }, 500)
    showMessage(response.data.msg, 'error', true)
    return
  }
  setTimeout(() => {
    fullScreenLoading.close()
  }, 500)
  return response.data
}

export default {
  post (url, data) {
    fullScreenLoading = Vue.prototype.$loading({
      lock: true,
      text: '加载中...',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    return axios({
      method: 'post',
      url: config.api + url,
      data: qs.stringify(data),
      timeout: config.timeout,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
      .then(checkStatus)
      .then(checkCode)
  },
  get (url, params) {
    fullScreenLoading = Vue.prototype.$loading({
      lock: true,
      text: '加载中...',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    return axios({
      method: 'get',
      url: config.api + url,
      params,
      timeout: config.timeout,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
      .then(checkStatus)
      .then(checkCode)
  }
}
