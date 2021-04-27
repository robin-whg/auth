import { auth } from "./authentication.service";

export const namespaced = true;

export const state = {
  user: {},
  token: {}
};

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_TOKEN(state, token) {
    state.token = token
  }
};

export const actions = {
  setUser({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        commit("SET_USER", user);
        if(user) {
          const token = await auth.currentUser.getIdTokenResult(true)
          commit('SET_TOKEN', token)
        }
        unsubscribe();
        dispatch("bindUser");
        resolve();
      }, reject);
    });
  },
  bindUser({ commit }) {
    auth.onAuthStateChanged(async (user) => {
      commit("SET_USER", user);
      if(user) {
        const token = await auth.currentUser.getIdTokenResult()
        commit('SET_TOKEN', token)
      }
    });
  },
  async signIn({ dispatch }, { email, password }) {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      dispatch(
        "core/addAlert",
        { type: "danger", message: error.message },
        { root: true }
      );
    }
  },
  async resetPassword({ dispatch }, { email }) {
    try {
      await auth.sendPasswordResetEmail(email);
      dispatch(
        "core/addAlert",
        { type: "success", message: "Reset email sent." },
        { root: true }
      );
      return true;
    } catch (error) {
      dispatch(
        "core/addAlert",
        { type: "danger", message: error.message },
        { root: true }
      );
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
  getClaims: (state) => {
    return state.token?.claims || {}
  }
};
