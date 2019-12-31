<template>
  <div id="app">
    <navigation-bar />
    <router-view />
    <message-photographer v-if="showMessagePhotographer" />
    <book-appointment v-if="showBookAppointment" />
    <footer-bar />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import FooterBar from '@/components/FooterBar'
import MessagePhotographer from '@/components/MessagePhotographer'
import BookAppointment from '@/components/BookAppointment'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    NavigationBar,
    MessagePhotographer,
    BookAppointment,
    FooterBar
  },
  computed: {
    ...mapState(['showMessagePhotographer', 'showBookAppointment'])
  }
}
</script>

<style lang="scss">
#app {
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
}
</style>
