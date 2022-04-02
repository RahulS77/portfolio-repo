export const state = () => ({
  isMobile: false
});

export const getters = {
  isMobile: state => state.isMobile
};

export const mutations = {
  isMobile (state, payload) {
    state.isMobile = payload;
  }
};

export const actions = {
  setDeviceType ({ commit }, payload) {
    commit('isMobile', payload);
  }
};

export const strict = false