import * as types from './type.js'
export default {
  [types.SET_LOADING] (state, { flag, title }) {
    state[types.LOADING_SHOW] = flag
    state[types.LOADING_TITLE] = title || types.LOADING_TITLE
  }
}
