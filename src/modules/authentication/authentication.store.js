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
  signOut() {
    return auth.signOut()
  }
};

export const getters = {
  getUser: (state) => {
    return state.user;
  },
  isAuthenticated: (state) => {
    return state.user ? true : false
  },
};
