import * as types from './type.js'
export default {
  [types.COUNT_INC] ({ commit }) {
    commit(types.COUNT_INCREASE)
  },
  [types.COUNT_RES] ({ commit }) {
    commit(types.COUNT_RESET)
  }
}
