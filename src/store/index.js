import { createStore } from 'vuex'

import * as auth from './modules/auth.js'
import * as alert from './modules/alert.js'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    alert
  }
})
