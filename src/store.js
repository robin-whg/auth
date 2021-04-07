import { createStore } from 'vuex'

import { store as core } from '@/modules/core/'
import { store as authentication } from '@/modules/authentication'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    core,
    authentication,
  }
})
