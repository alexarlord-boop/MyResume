<template>
  <div id="fin" class="wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ScreenFinapp",
  methods: {
    scrollHandler() {
      let rotateIndex = 300 + (window.scrollY / document.body.scrollHeight) * 950;
      document.getElementById("fin").style = `background: conic-gradient(from ${rotateIndex}deg, rgba(103,89,221,1) 50%,  rgba(41,171,226,1) 90%);`;
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
  background: conic-gradient(from 60deg, rgba(103, 89, 221, 1) 50%, rgba(41, 171, 226, 1) 90%);
}

@keyframes scale-easeOutElastic {
  0% {
    transform: scale(1);
  }

  10% {
    transform: scale(1.1);
  }

  60% {
    transform: scale(1);
  }

  100% {
    transform: scale(1);
  }
}

</style>