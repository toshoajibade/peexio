import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showMessagePhotographer: false,
    showBookAppointment: false,
    appointmentDate: 0,
    user: { /** Normally this data should come from the api */
      name: 'Afroshots',
      isVerified: true
    }
  },
  mutations: {
    handleMessagePhotographer(store, payload) {
      this.state.showMessagePhotographer = payload
    },
    handleBookAppointment(store, payload) {
      this.state.showBookAppointment = payload
    },
    handleAppointmentDate(store, payload) {
      this.state.appointmentDate = payload
    }
  },
  actions: {
  },
  modules: {
  },
});
