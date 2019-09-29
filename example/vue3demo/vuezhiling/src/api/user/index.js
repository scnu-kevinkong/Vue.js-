import api from '../index'
import urls from './urls'

const header = {}

export default {
  user (params) {
    // return出去了一个promise
    return api.get(urls.user, params, header)
  }
}
