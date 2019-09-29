import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import global from './global'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    global
  }
})

export default store
