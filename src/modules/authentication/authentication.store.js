import { auth } from "./authentication.service";

export const namespaced = true;

export const state = {
  user: {},
};

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
};

export const actions = {
  setUser({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        commit("SET_USER", user);
        unsubscribe();
        dispatch("bindUser");
        resolve();
      }, reject);
    });
  },
  bindUser({ commit }) {
    auth.onAuthStateChanged((user) => {
      commit("SET_USER", user);
    });
  },
  async signIn({ dispatch }, { email, password }) {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      return true
    } catch (error) {
      dispatch('core/addAlert', { type: 'danger', message: error.message }, { root: true })
    }
  },
  signOut() {
    return auth.signOut();
  },
};

export const getters = {
  getUser: (state) => {
    return state.user;
  },
  isAuthenticated: (state) => {
    return state.user ? true : false;
  },
};
