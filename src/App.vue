<template>
  <div id="app">
    <navigation-bar />
    <router-view />
    <footer-bar />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import FooterBar from '@/components/FooterBar'

export default {
  name: 'App',
  components: {
    NavigationBar,
    FooterBar
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
