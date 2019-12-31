<template>
  <div class="page">
    <img
      class="cover-image"
      src="@/assets/images/sunrise.jpg"
      alt="profile cover image"
    >
    <div class="content-nav">
      <div class="profile-image">
        <img
          src="@/assets/images/sunrise.jpg"
          alt="profile cover image"
        >
      </div>
      <div>
        <div
          v-for="(content, index) in contents"
          :key="index"
          class="content-nav-item"
        >
          <p @click.stop="changeContent(content)">{{content.text}}</p>
        </div>
      </div>
    </div>
    <div class="contents">
      <component :is="selectedContent" />
    </div>
  </div>
</template>

<script>
import Availability from "@/components/ProfileAvailability";
import Details from "@/components/ProfileDetails";
import Portfolio from "@/components/ProfilePortfolio";
import Pricing from "@/components/ProfilePricing";
import Reviews from "@/components/ProfileReviews";

export default {
  name: "ProfilePage",
  components: {
    Availability,
    Details,
    Portfolio,
    Pricing,
    Reviews
  },
  data() {
    return {
      selectedContent: "Availability",
      contents: [
        {
          component: "Details",
          text: "Details"
        },
        {
          component: "Portfolio",
          text: "Portfolio"
        },
        {
          component: "Availability",
          text: "Availability"
        },
        {
          component: "Pricing",
          text: "Pricing Packages"
        },
        {
          component: "Reviews",
          text: "Reviews"
        }
      ]
    };
  },
  methods: {
    changeContent(content) {
      this.selectedContent = content.component;
    }
  }
};
</script>

<style lang="scss" scoped>
.cover-image {
  width: 100%;
  height: 500px;
}
.content-nav {
  width: 100%;
  height: 3.5rem;
  background-color: $primary-color;
  padding: 0rem 6rem;
  display: flex;
  justify-content: space-between;
  p {
    color: white;
  }
  > div {
    display: flex;
  }
  .content-nav-item {
    padding: 0rem 1.5rem;
    display: flex;
    align-items: center;
  }
}
.profile-image {
  position: relative;
  img {
    width: 150px;
    height: 160px;
    position: absolute;
    bottom: -1rem;
    border-radius: 0.25rem;
  }
}
.contents {
  padding: 6rem;
  background-color: $primary-color-light;
}
</style>