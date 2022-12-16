<template>
  <div class="hoverArea" @mouseenter="mouseEnter" @mousemove="mouseMove" @mouseleave="mouseLeave">
  <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MovingContainer",
  data() {
    return {
      x: 0,
      y: 0,
      xdir: 0,
      ydir: 0,
      xstart: 0,
      ystart: 0
    }
  },
  methods: {
    update(e){
      this.xdir = (e.movementX > 0) ? 1 : -1
      this.ydir = (e.movementY > 0) ? 1 : -1
      this.x = e.pageX
      this.y = e.pageY
    },
    mouseEnter(e) {
      this.xstart = e.clientX;
      this.ystart = e.clientY;
      window.addEventListener('mousemove', this.update);
      this.$el.addEventListener('mousemove', this.mouseMove, false);
    },
    mouseMove(e) {
      console.log(e.clientX, e.clientY);
      console.log(e.path[0].style);
      e.path[0].style = "transform: translateX(" + (e.clientX - this.xstart) / 2 + "px) " +
          "translateY(" + (e.clientY - this.ystart) / 2  + "px);"
    },
    mouseLeave(e) {
      e.path[0].style = "transition: 1s";
      window.removeEventListener('mousemove', this.update);
      this.$el.removeEventListener('mousemove', this.mouseMove);
    }
  }

}
</script>

<style scoped>
.hoverArea {

}


</style>