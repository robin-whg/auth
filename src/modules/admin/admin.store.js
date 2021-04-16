import * as service from "./admin.service";

export const namespaced = true;

export const state = {
  users: [],
  pageToken: undefined,
  maxResults: 25,
};

export const mutations = {
  ADD_USERS(state, users) {
    state.users.push(...users);
  },
  REMOVE_ALERT(state, user) {
    state.users = state.users.filter((x) => x.uid !== user.uid);
  },
  SET_PAGE_TOKEN(state, pageToken) {
    state.pageToken = pageToken;
  },
  UPDATE_USER(state, updatedUser) {
    const index = state.users.indexOf(state.users.find((x) => x.uid === updatedUser.uid));
    console.log(index);
    console.log(updatedUser);
    console.log(state.users[index])
    state.users[index] = updatedUser
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
      return true;
    } catch (error) {
        console.log(error)
      dispatch(
        "core/addAlert",
        { type: "danger", message: error.message },
        { root: true }
      );
    }
  },
};
