<template>
  <overlay-wrapper>
    <form
      v-click-outside="hideModal"
      class="modal"
    >
      <h4 class="form-header">
        Schedule Appointment for {{ readableAppointment }}?
      </h4>
      <input-field
        v-model="state.name"
        name="name"
        label="Full Name"
        placeholder=""
        :error-message="errorMessages.name"
      />
      <input-field
        v-model="state.email"
        name="email"
        type="email"
        label="Email"
        placeholder=""
        :error-message="errorMessages.email"
      />
      <base-button
        text="Confirm"
        btn-action="confirmAppointment"
        @confirmAppointment="confirmAppointment"
      />
    </form>
  </overlay-wrapper>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { format } from 'date-fns'

export default {
  name: 'BookAppointment',
  data() {
    return {
      state: {
        name: '',
        email: ''
      },
      errorMessages: {
        name: '',
        email: ''
      }
    }
  },
  computed: {
    ...mapState(['appointmentDate']),
    readableAppointment() {
      return format(new Date(this.appointmentDate), 'MMM do, yyyy')
    }
  },
  methods: {
    ...mapMutations(['handleBookAppointment']),
    confirmAppointment() {
      // This should send this appointment to the api
    },
    hideModal() {
      this.handleBookAppointment(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.form-header {
  margin-bottom: 1rem;
}
</style>
