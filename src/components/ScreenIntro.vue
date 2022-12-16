<template>
  <div id="intro" class="wrap">
    <slot></slot>

        <Particle v-if="isScreenEntered" v-for="(s, index) in starList" :key="index" :star-id="'star'+index"
                  :size="s.size" :delay="s.delay" :start-x="s.startX" :startY="s.startY"/>

  </div>
</template>

<script>

import Particle from "@/components/Particle.vue";
import CardInfo from "@/components/CardInfo.vue";

export default {
  name: "ScreenIntro",
  components: {
    Particle,
    CardInfo
  },
  data() {
    return {
      mouseEnteredScreen: false,
      starList: [
        {size: 2, delay: 1, startX: 0, startY: 0},
        {size: 2, delay: 2, startX: 20, startY: 0},
        {size: 1, delay: 3, startX: 50, startY: 0},
        {size: 2, delay: 3.2, startX: 30, startY: -20},
        {size: 1, delay: 1.5, startX: 80, startY: 50},
        {size: 1, delay: 2.5, startX: 90, startY: 0}]
    }
  },
  methods: {
    startBeautification() {
      this.mouseEnteredScreen = true;

    },
    stopBeautification() {
      this.mouseEnteredScreen = false;

    }
  }
  ,
  computed: {
    isScreenEntered() {
      return this.mouseEnteredScreen;
    }
  }
  ,
  mounted() {
    document.getElementById("intro").addEventListener('mouseover', this.startBeautification);
    document.getElementById("intro").addEventListener('mouseleave', this.stopBeautification);
  },
  unmounted() {
    document.getElementById("intro").removeEventListener('mouseover', this.startBeautification);
    document.getElementById("intro").removeEventListener('mouseleave', this.stopBeautification);
  }
}
</script>

<style scoped>
.wrap {

  overflow: hidden;
  background: linear-gradient(180deg, rgba(54, 61, 194, 1) 0%, rgba(103, 89, 221, 1) 41%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
{
  opacity: 0;
}


</style>