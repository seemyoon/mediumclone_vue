import { RegisterInterface } from "@/interfaces/register.interface";
import { ActionContext } from "vuex";
import { State } from "@/types/auth-state.types";

const state = {
  isSubmitting: false, // init state
};

const mutations = {
  registerStart(state: RegisterInterface) {
    //These are functions that change the state.
    state.isSubmitting = true;
  },
};

// action - work now and then change the station
const actions = {
  register(context: ActionContext<State, unknown>) {
    // context is the object that Vuex passes to the action.
    setTimeout(() => {
      context.commit("registerStart");
    }, 1000);
  },
};

export default {
  // part of global state
  state,
  actions,
  mutations,
};
