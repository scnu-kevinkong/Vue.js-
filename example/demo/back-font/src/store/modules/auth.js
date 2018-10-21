import cookies from 'js-cookie'
import Vue from 'vue'
import { Message } from 'element-ui'
import { userLogin } from '../../api/user'
import $api from '../../api/index-client'
Vue.prototype.$message = Message
const state = () => ({
  username: '',
  token: ''
})

const showMessage = function (message, type, showClose) {
  Vue.prototype.$message({
    showClose: showClose,
    type: type,
    message: message
  })
}
const actions = {
  async login (
    {
      commit,
      state,
      dispatch
    },
    config
  ) {
    const { username, password } = config
    if (username.length === 0 || password.length === 0) {
      showMessage('账号或密码为空', 'warning', true)
    } else {
      const confirmUsername = 'kongwk'
      const confirmPassword = '123456'
      if (username === confirmUsername && password === confirmPassword) {
        cookies.set('token', username)
        cookies.set('username', username)
        await commit('setUsername', username)
        await commit('setToken', username)
        const result = await $api.post(userLogin, { })
        console.log(result)
      } else {
        showMessage('账号或密码不正确', 'error', true)
      }
    }
  }
}

const mutations = {
  'setUsername' (state, username) {
    state.username = username
  },
  'setToken' (state, token) {
    state.token = token
  }
}

const getters = {
  'getUserName' (state) {
    if (state.username) {
      return state.username
    } else {
      return cookies.get('username')
    }
  },
  'getToken' (state) {
    if (state.token) {
      return state.token
    } else {
      return cookies.get('token')
    }
  }
}

export default {
  namespaced: true,
  actions,
  state,
  mutations,
  getters
}
