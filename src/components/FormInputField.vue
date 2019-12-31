<template>
  <div class="input-wrapper">
    <label :for="name">
      <p>{{ label }}</p>
      <div :class="['input-inner-wrapper', focused ? 'focused' : '']">
        <input
          :type="type"
          :value="value"
          autocomplete="off"
          spellcheck="false"
          :placeholder="placeholder"
          @focus="focused = true"
          @blur="focused = false"
          @input="$emit('input', $event.target.value)"
        >
      </div>
    </label>
    <div class="error-message">
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormInputField',
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
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    value: {
      type: [String, Number, Array],
      required: false,
      default: ''
    }
  },
  data() {
    return {
      focused: false
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
  border: $input-field-border;
  margin-top: 0.25rem;
  position: relative;
  &.focused {
    border-color: $primary-color;
  }
}

input {
  padding: 0.8rem;
  font-size: 1rem;
  width: 100%;
  outline: none;
  height: 100%;
  border: 0px;
  background-color: transparent;
  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: #a3a3a3;
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #a3a3a3;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #a3a3a3;
  }
}
</style>
