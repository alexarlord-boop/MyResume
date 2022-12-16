<template>
  <div id="lib" class="wrap">
    <slot></slot>
  <button class="visitBtn">
    <slot name="visit-btn"></slot>
  </button>
  </div>
</template>

<script>
export default {
  name: "ScreenLib",
  methods: {
    scrollHandler() {
      let resizeIndex = 84 - (window.scrollY / document.body.scrollHeight) * 100;
      document.getElementById("lib").style = `background-size: ${resizeIndex}%;`;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler);
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrollHandler);
  }
}
</script>

<style scoped>

.wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, rgba(41,171,226,1) 40%, rgba(15,79,131,1) 90%,rgba(41,171,226,1) 75%);
}

.visitBtn {
  position: absolute;
  top: 65vh;

  width: 170px;
  height: 30px;background-color: #b3fcff;
  cursor: pointer;
  border-radius: 5px;

  font-size: 1.2em;
}

@media screen and (min-width: 325px) and (max-width: 600px) {
  .wrap {
    background: radial-gradient(circle at 170%, rgba(41,171,226,1) 30%, rgba(15,79,131,1) 75%, rgba(41,171,226,1) 75%);
  }
}

</style>