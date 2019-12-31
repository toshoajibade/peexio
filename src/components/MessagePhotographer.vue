<template>
  <overlay-wrapper>
    <form v-click-outside="hideModal" class="modal">
      <input-field
        v-model="state.name"
        name="name"
        label="Full Name"
        placeholder=""
        :error-message="errorMessages.name"
      />
      <textarea-field
        v-model="state.message"
        name="message"
        label="Message"
        placeholder="Please type your message here"
        :error-message="errorMessages.message"
      />
      <div>
        <base-button text="Send Message" btn-action="sendMessage" @sendMessage="sendMessage" />
      </div>
    </form>
  </overlay-wrapper>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { mapMutations } from 'vuex'
// import { required, email } from "vuelidate/lib/validators";

export default {
  name: 'MessagePhotographer',
  mixins: [validationMixin],
  data() {
    return {
      state: {
        name: '',
        message: ''
      },
      errorMessages: {
        name: '',
        message: ''
      }
    }
  },
  methods: {
    ...mapMutations(['handleMessagePhotographer']),
    hideModal() {
      this.handleMessagePhotographer(false)
    },
    sendMessage() {
      // This should send this message to the api
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
