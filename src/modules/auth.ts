import { IsSubmittingInterface } from "@/interfaces/isSubmitting.interface";
import { ActionContext } from "vuex";
import { State } from "@/types/auth-state.types";
import authApi from "@/api/auth";
import { RegisterInterface } from "@/interfaces/register.interface";

const state = {
  isSubmitting: false, // init state
};

const mutations = {
  registerStart(state: IsSubmittingInterface) {
    //These are functions that change the state.
    state.isSubmitting = true;
  },
  registerSuccess(state: IsSubmittingInterface) {
    //These are functions that change the state.
    state.isSubmitting = false;
  },
  registerFailure(state: IsSubmittingInterface) {
    //These are functions that change the state.
    state.isSubmitting = false;
  },
};

// action - work now and then change the station
const actions = {
  register(
    context: ActionContext<State, unknown>,
    credentials: RegisterInterface
  ): Promise<void> {
    // context is the object that Vuex passes to the action.

    // credentials is an object with user data for registration (e.g. email, password, username, etc.).
    // This data comes from the registration form.
    return new Promise(() => {
      authApi
        .register(credentials)
        .then((res) => {
          console.log("response:", res);
          context.commit("registerSuccess", res.data.user);
        })
        .catch((res) => {
          console.log("errors: ", res.response.data.errors);
          console.log("result errors", res);
        });
    });
  },
};

export default {
  // part of global state
  state,
  actions,
  mutations,
};
