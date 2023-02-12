import { createStore } from "vuex";

export default createStore({
  state: {
    livro: Object,
  },
  getters: {},
  mutations: {
    SET_LIVRO(state, value) {
      state.livro = value;
    },
  },
  actions: {
    setLivro({ commit }, value) {
      commit("SET_LIVRO", value);
    },
  },
  modules: {},
});
