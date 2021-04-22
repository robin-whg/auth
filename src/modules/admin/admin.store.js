import * as service from "./admin.service";

export const namespaced = true;

export const state = {
  users: [],
  pageToken: undefined,
  maxResults: 10,
};

export const mutations = {
  CLEAR_USERS(state) {
    state.users = [];
  },
  ADD_USERS(state, users) {
    state.users.push(...users);
  },
  ADD_USER(state, user) {
    state.users.push(user);
  },
  DELETE_USER(state, user) {
    state.users = state.users.filter((x) => x.uid !== user.uid);
  },
  UPDATE_USER(state, updatedUser) {
    const index = state.users.indexOf(
      state.users.find((x) => x.uid === updatedUser.uid)
    );
    state.users[index] = updatedUser;
  },
  SET_PAGE_TOKEN(state, pageToken) {
    state.pageToken = pageToken;
  },
};

export const actions = {
  async listUsers({ commit, dispatch }) {
    try {
      const { data } = await service.listUsers({
        maxResults: state.maxResults,
        pageToken: state.pageToken,
      });
      commit("SET_PAGE_TOKEN", data.pageToken || undefined);
      commit("ADD_USERS", data.users);
    } catch (error) {
      dispatch(
        "core/addAlert",
        { type: "danger", message: error.message },
        { root: true }
      );
    }
  },
  async updateUser({ commit, dispatch }, updatedUser) {
    try {
      const { data } = await service.updateUser(updatedUser);
      console.log(updatedUser);
      commit("UPDATE_USER", data);
      return data;
    } catch (error) {
      console.log(error);
      dispatch(
        "core/addAlert",
        { type: "danger", message: error.message },
        { root: true }
      );
    }
  },
  async createUser({ commit, dispatch }, user) {
    try {
      const { data } = await service.createUser(removeEmpty(user));
      commit("ADD_USER", data);
      return data;
    } catch (error) {
      console.log(error);
      dispatch(
        "core/addAlert",
        { type: "danger", message: error.message },
        { root: true }
      );
    }
  },
  async setCustomUserClaims({ commit, dispatch }, { uid, claims }) {
    try {
      const { data } = await service.setCustomUserClaims({ uid, claims })
      const user = {...state.users.find(x => x.uid === uid), customClaims: claims}
      commit('UPDATE_USER', user)
      return data;
    } catch (error) {
      console.log(error);
      dispatch(
        "core/addAlert",
        { type: "danger", message: error.message },
        { root: true }
      );
    }
  },
  async deleteUser({ commit, dispatch }, user) {
    try {
      await service.deleteUser({ uid: user.uid });
      if (state.pageToken && state.pageToken === user.uid) {
        // Change page token if user is the last in array otherwise the token is invalid.
        const newPageToken =
          state.users[state.users.length - 2].uid || undefined;
        commit("SET_PAGE_TOKEN", newPageToken);
      }
      commit("DELETE_USER", user);
      //if there is only one user in the list reload otherwise you can't load more users
      if (state.users.length === 1) {
        await dispatch("listUsers");
      }
      return true;
    } catch (error) {
      console.log(error);
      dispatch(
        "core/addAlert",
        { type: "danger", message: error.message },
        { root: true }
      );
    }
  },
};

function removeEmpty(obj) {
  return Object.entries(obj).reduce(
    (a, [k, v]) => (v == null || v === '' ? a : ((a[k] = v), a)),
    {}
  );
}
