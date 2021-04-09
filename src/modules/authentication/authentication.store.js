import { auth } from "./authentication.service";

export const namespaced = true;

export const state = {
  user: {},
  test: "test",
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
        unsubscribe();
        commit("SET_USER", user);
        dispatch("bindUser");
        console.log("setUser");
        resolve(true);
      }, reject);
    });
  },
  async bindUser({ commit }) {
    console.log("boundUser");
    auth.onAuthStateChanged((user) => {
      commit("SET_USER", user);
    });
  },
};

export const getters = {
  getUser: (state) => {
    return state.user;
  },
  isAuthenticated: (state) => {
    return state.user ? true : false
  },
};
