<template>
  <overlay-wrapper>
    <form class="modal" v-click-outside="hideModal">
      <input-field
        v-model="state.name"
        name="name"
        label="Full Name"
        placeholder=""
        :error-message="errorMessages.name"
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
import { mapMutations } from 'vuex'

export default {
  name: 'BookAppointment',
  data() {
    return {
      state: {
        name: ''
      },
      errorMessages: {
        name: ''
      }
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

<style lang="scss" scoped></style>
