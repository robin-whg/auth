export const namespaced = true

export const state = {
    user: {},
    test: 'test'
}

export const mutations = {
    SET_USER(state, user) {
        state.user = user
    }
}

export const actions = {
    setUser({ commit }, user) {
        commit('SET_USER', user)
    }
}

export const getters = {
    getUser: state => {
        return state.user.uid
    }
}