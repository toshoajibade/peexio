import Vue from 'vue'
import OverlayWrapper from './OverlayWrapper'
import FormInputField from './FormInputField'
import FormTextareaField from './FormTextareaField'
import BaseButton from './BaseButton'

Vue.component('input-field', FormInputField)

Vue.component('textarea-field', FormTextareaField)

Vue.component('overlay-wrapper', OverlayWrapper)

Vue.component('base-button', BaseButton)

