export const namespaced = true;

export const state = {
  alerts: [
  ],
};

let nextId = 1;

export const mutations = {
  ADD_ALERT(state, alert) {
    state.alerts.push({
      ...alert,
      id: nextId++,
    });
  },
  REMOVE_ALERT(state, alert) {
    state.alerts = state.alerts.filter((x) => x.id !== alert.id);
  },
};

export const actions = {
  addAlert({ commit }, alert) {
    commit("ADD_ALERT", alert);
  },
  removeAlert({ commit }, alert) {
    commit("REMOVE_ALERT", alert);
  },
};
