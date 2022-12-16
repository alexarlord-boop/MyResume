<template>

  <div class="fallingStar" :id="starId"></div>

</template>

<script>

export default {
  name: "Particle",
  props: {
    starId: String,
    size: Number,
    delay: Number,
    startX: Number,
    startY: Number
  },
  data() {
    return {
      x: document.body.scrollWidth / 2,
      y: 0
    }
  },
  methods: {
    followMouse(e) {
      let shadowScewX = (e.clientX - this.x);
      let shadowScewY = (e.clientY - this.y);
      let shdw1 = "#ffffff -10px -10px 30px 10px,";
      let shdw2 = `#ffffff ${shadowScewX * 0.9}px ${shadowScewY * 0.4}px 15px 10px,`;
      let shdw3 = `#ffffff ${shadowScewX * 0.3}px ${shadowScewY * 0.7}px 35px 10px`;

      document.getElementById(this.starId).style.setProperty("box-shadow", shdw1 + shdw2 + shdw3);
    }
  },
  mounted() {
    let s = this.size;
    let x = this.startX;
    let y = this.startY;
    let d = this.delay;
    document.getElementById(this.starId).style = `width:${s}px;height:${s}px;left:${x}vw;top:${y}vh;animation-delay:${d}s;`;
    window.addEventListener("mousemove", this.followMouse);
  },
  unmounted() {
    window.removeEventListener("mousemove", this.followMouse);

  }

}
</script>

<style scoped lang="css">

.fallingStar {
  z-index: 5000;
  position: absolute;
  top: 0;
  left: 0;
  width: 7px;
  height: 7px;
  transform: rotate(45deg) scale(0.01);
  border-radius: 50%;
  box-shadow: #ffffff -10px -10px 50px 10px, #ffffff 10px 10px 10px 1px;
  background-color: #ffffff;
  animation: fall;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  transition: all 0.2s ease-out;
}

@media screen and (min-width: 325px) and (max-width: 600px) {
  .fallingStar {
    animation: fall-vertical 3s;
    animation-iteration-count: infinite;
  }
}

@keyframes fall {
  0% {
    transform: scale(0.01);

  }
  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.01);
    margin-left: 50%;
    margin-top: 50%;
  }
}

@keyframes fall-vertical {
  0% {
    transform: scale(0.01);
  }
  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.01);
    margin-left: 99%;
    margin-top: 99%;
  }
}

@keyframes stick {
  0% {
    transform: scale(0.01);
  }
  5% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  80% {
    transform: scale(0.01);
  }

}

</style>