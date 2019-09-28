import * as types from './type.js'
export default {
  [types.FACTORIAL] (state) {
    let sum = 1
    for (let i = 2; i <= state[types.COUNT_STATE]; i++) {
      sum *= i
    }
    return sum
  }
}
