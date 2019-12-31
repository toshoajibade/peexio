<template>
  <div class="navbar">
    <div class="nav-item">
      <p>Logo</p>
    </div>
    <div>
      <div
        v-for="(navlink, index) in navlinks"
        :key="index"
        class="nav-item"
      >
        <router-link :to="navlink.to">
          {{ navlink.text }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      navlinks: [
        {
          to: "/",
          text: "I am a photographer"
        },
        {
          to: "/",
          text: "Explore Photos"
        },
        {
          to: "/",
          text: "Find a photographer"
        },
        {
          to: "/",
          text: "Find my photos"
        },
        {
          to: "/",
          text: "Login or Register"
        },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 4rem;
  padding: 0rem 4rem;
  justify-content: space-between;
  > div {
    display: flex;
    
  }
  .nav-item {
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
  }
}
</style>