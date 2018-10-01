import Vue from 'vue';
import Vuex from 'vuex';

import login from './modules/tokendeal';
import group from './modules/group';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    login,
    group,

  }
});

export default store;
