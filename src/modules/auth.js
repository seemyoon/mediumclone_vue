import authApi from "@/api/auth";
import {setItem} from '@/helpers/persistanceStorage'

const state = {
  isSubmitting: false, // init state
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
  // isLoggedIn: null We don't know yet whether the user is logged in or not. For example, we just opened the site but haven't checked the token.
  // true The user is logged in
  // false The user is not logged in
};

const mutations = {
  //These are functions that change the state.
  registerStart(state) {
    state.isSubmitting = true;
    state.validationErrors = null;
  },
  registerSuccess(state, payload) {
    state.isSubmitting = false;
    state.currentUser = payload;
    state.isLoggedIn = false;
  },
  registerFailure(state, payload) {
    state.isSubmitting = false;
    state.validationErrors = payload;
  },
};

// action - work now and then change the station
const actions = {
  register(context, credentials) {
    // context is the object that Vuex passes to the action.

    // credentials is an object with user data for registration (e.g. email, password, username, etc.).
    // This data comes from the registration form.
    return new Promise((resolve, reject) => {
      authApi
        .register(credentials)
        .then((res) => {
          context.commit("registerSuccess", res.data.user);
          setItem('accessToken', res.data.user.token)
          resolve(res.data.user);
        })
        .catch((err) => {
          context.commit("registerFailure", err);
          reject(err);
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
