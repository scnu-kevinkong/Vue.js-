import * as types from './type.js'
export default {
  [types.COUNT_INCREASE] (state) {
    state[types.COUNT_STATE]++
  },
  [types.COUNT_RESET] (state) {
    state[types.COUNT_STATE] = 0
  }
}
