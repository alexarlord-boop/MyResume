<template>
  <div class="transit-btn" @click="GoTO">
    <div class="transit-btn__text">discover</div>
    <div class="transit-btn__arrow"><ArrowRight/></div>
  </div>
</template>

<script>
import ArrowRight from "@/components/icons/ArrowRight.vue";

export default {
  name: "TransitButton",
  components: {ArrowRight},
  props: ['lnk'],
  methods: {
    GoTO() {
      window.location.href = this.lnk;
    }
  }
}
</script>

<style scoped lang="scss">
.transit-btn {
  width: 200px;
  background-color: #181818;
  border-radius: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  &:hover {
    .transit-btn__arrow {
      transform: translateX(5px);
    }
  }
}
.transit-btn__text {
  font-size: 1.5em;
}

.transit-btn__arrow {
  left: 10px;
  width: 30px;
  height: 30px;
  transition: all 0.2s ease-in-out;
}
</style>