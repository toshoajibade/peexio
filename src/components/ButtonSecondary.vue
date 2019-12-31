<template>
  <button
    :class="['btn btn-primary', isDisabled ? 'disabled': '']"
    :disabled="isDisabled"
    @click.prevent.stop="$emit(btnAction)"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    btnAction: {
      type: String,
      default: '',
      required: true
    },
    text: {
      type: String,
      default: '',
      required: true
    },
    isDisabled: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>

