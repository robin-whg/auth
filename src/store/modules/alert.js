export const namespaced = true;

export const state = {
  alerts: [
  ],
};

let nextId = 1;

export const mutations = {
  ADD(state, alert) {
    state.alerts.push({
      ...alert,
      id: nextId++,
    });
  },
  REMOVE(state, alert) {
    state.alerts = state.alerts.filter((x) => x.id !== alert.id);
  },
};

export const actions = {
  add({ commit }, alert) {
    commit("ADD", alert);
  },
  remove({ commit }, alert) {
    commit("REMOVE", alert);
  },
};
