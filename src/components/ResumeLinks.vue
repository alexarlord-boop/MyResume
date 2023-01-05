<template>
  <div class="links-group">
    <IconGit class="icon-lnk cross-shape" @click="GoToLnk(cardsLink[0].lnk)"></IconGit>
    <IconVK class="icon-lnk circle-shape" @click="GoToLnk(cardsLink[1].lnk)"></IconVK>
    <IconLNKD class="icon-lnk" @click="GoToLnk(cardsLink[2].lnk)"></IconLNKD>
  </div>
</template>

<script>
import IconGit from "@/components/icons/IconGit.vue";
import IconVK from "@/components/icons/IconVK.vue";
import IconLNKD from "@/components/icons/IconLNKD.vue";

export default {
  name: "ResumeLinks",
  components: {IconLNKD, IconVK, IconGit},
  data() {
    return {
      cardsLink: [{innerText: 'github', lnk: 'https://github.com/alexarlord-boop'},
        {innerText: 'VK', lnk: 'https://vk.com/alexarlord'}, {
          innerText: 'LinkedIn',
          lnk: 'https://www.linkedin.com/in/aleksandr-petrunin-b4b720259/'
        }]
    }
  },
  methods: {
    GoToLnk(lnk) {
      window.location.href = lnk;
    }
  }
}
</script>

<style scoped lang="scss">
.links-group {
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}

.icon-lnk {
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: 0.1s ease-out;
}

.cross-shape {
  clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
}

.trapezoid-shape {
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
}

.circle-shape {
  clip-path: circle(50% at 50% 50%);
}

@media screen and (min-width: 601px) {
  .links-group {
    left: 100px;
  }
  .icon-lnk {
    width: 150px;
    height: 150px;

    &:hover {
      z-index: 500;
      transform: scale(1.3) rotate(10deg);
      background: rgba(127, 84, 255, 0.88);
    }
  }
}

@media screen and (min-width: 325px) and (max-width: 600px) {
  .links-group {
    display: flex;
    justify-content: space-between;
    top: -50px;
    left: 0;
  }

  .icon-lnk {
    width: 50px;
    height: 50px;
  }
}
</style>