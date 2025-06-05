import { createStore } from "vuex";
import auth from "@/modules/auth";

export default createStore({
  state: {
    count: 0, // store state
  },
  getters: {},
  mutations: {
    increment(state) {
      state.count++;
    }, //   how the state changes
  },
  actions: {},
  modules: {
    auth,
  },
});
