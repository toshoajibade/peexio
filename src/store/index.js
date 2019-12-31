import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showMessagePhotographer: false,
    showBookAppointment: false
  },
  mutations: {
    handleMessagePhotographer(store, payload) {
      this.state.showMessagePhotographer = payload
    },
    handleBookAppointment(store, payload) {
      this.state.showBookAppointment = payload
    }
  },
  actions: {
  },
  modules: {
  },
});
