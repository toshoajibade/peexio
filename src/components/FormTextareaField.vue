<template>
  <div class="input-wrapper">
    <div>
      <label :for="name">{{ label }}</label>
    </div>
    <div :class="['input-inner-wrapper', focused ? 'focused' : '']">
      <textarea
        :value="value"
        :placeholder="placeholder"
        @focus="focused = true"
        @blur="focused = false"
        @input="textInput"
      />
    </div>
    <div class="error-message">
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormTextareaField',
  props: {
    label: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      default: '',
      required: false
    },
    placeholder: {
      type: String,
      default: '',
      required: false
    },
    name: {
      type: String,
      default: '',
      required: false
    },

    value: {
      type: String,
      default: '',
      required: false
    },
    autocomplete: {
      type: String,
      default: '',
      required: false
    }
  },
  data() {
    return {
      focused: false
    }
  },
  methods: {
    textInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  position: relative;
  width: 100%;

}
.input-inner-wrapper {
  width: 100%;
  border-radius: 10px;
  padding: 0.75rem;
  border: $input-field-border;
  margin-top: 0.25rem;
  &.focused {
    border-color: $primary-color;
  }
}

textarea {
  font-size: 1rem;
  width: 100%;
  height: 100px;
  outline: none;
  resize: none;
  border: 0px;
  background-color: transparent;
  &:focus,
  &:active {
    outline: none;
  }
}
</style>
