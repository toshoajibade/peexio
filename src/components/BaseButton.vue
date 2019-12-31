<template>
  <button
    :class="['btn', type]"
    :disabled="isDisabled"
    @click.prevent.stop="$emit(btnAction)"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    btnAction: {
      type: String,
      default: "",
      required: true
    },
    text: {
      type: String,
      default: "",
      required: true
    },
    isDisabled: {
      type: Boolean,
      default: false,
      required: false
    },
    type: {
      type: String,
      default: "primary",
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 0.5rem 1rem;
  border-radius: 1.25rem;
  height: 2.5rem;
  width: 180px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}
.btn.primary {
  background-color: $primary-color;
  color: white;
}
.btn.secondary {
  border: 1px solid $primary-color;
  color: $primary-color;
  background-color: white;
}
</style>
