import { createStore } from 'vuex'

import { store as core } from '@/modules/core/'
import { store as authentication } from '@/modules/authentication'
import { store as admin } from '@/modules/admin'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    admin,
    authentication,
    core,
  }
})
