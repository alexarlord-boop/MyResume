<template>
  <div id="fin" class="wrap">
    <slot></slot>
    <div class="visitBtn">
      <slot name="visit-btn"></slot>
    </div>

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

.visitBtn {
  position: absolute;
  top: 65vh;

  font-family: "Roboto Mono", monospace;
  color: #b3fcff;
  cursor: pointer;
  border-radius: 5px;

  font-size: 1.5em;
  font-weight: 500;

  animation: scale-easeOutElastic 3s;
  animation-iteration-count: infinite;
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