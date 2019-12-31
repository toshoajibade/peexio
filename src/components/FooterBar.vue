<template>
  <div>
    <div class="footer-top">
      <div>
        <h4>Quick Links</h4>
        <div
          v-for="(quicklink, index) in quicklinks"
          :key="index"
        >
          <router-link :to="quicklink.to">
            {{ quicklink.text }}
          </router-link>
        </div>
      </div>
      <div>
        <h4>Company</h4>
        <div
          v-for="(companyLink, index) in companyLinks"
          :key="index"
        >
          <router-link :to="companyLink.to">
            {{ companyLink.text }}
          </router-link>
        </div>
      </div>
      <div>
        <h4>Connect with Us</h4>
        <div>
          <p>5A, Awudu Egheda,</p>
          <p>Lekki, Lagos</p>
          <p>+234 8003229932</p>
          <p>customer.service@peexo.ai</p>
        </div>
      </div>
    </div>
    <div class="base">
      <p>&#169; 2019 Peexo Nigeria Limited</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBar",
  data() {
    return {
      quicklinks: [
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
          text: "Peexoomemories"
        },
        {
          to: "/",
          text: "Become a photographer"
        }
      ],
      companyLinks: [
        {
          to: "/",
          text: "About Us"
        },
        {
          to: "/",
          text: "FAQs"
        },
        {
          to: "/",
          text: "Pricing"
        },
        {
          to: "/",
          text: "Careers"
        },
        {
          to: "/",
          text: "Help and Support"
        },
        {
          to: "/",
          text: "Terms of Service"
        },
        {
          to: "/",
          text: "Privacy Policy"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.footer-top {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 2rem 12%;
}
.base {
  width: 100%;
  display: flex;
  height: 3.5rem;
  background-color: rgb(31, 31, 31);
  align-items: center;
  justify-content: center;
  p {
    color: white;
  }
}
</style>