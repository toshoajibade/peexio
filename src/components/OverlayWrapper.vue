<template functional>
  <div>
    <transition
      name="fade-in"
      appear
    >
      <div class="overlay-wrapper">
        <slot />
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.overlay-wrapper {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 200;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
