<script>
export default {
  props: {
    hovered: Boolean
  },
  data() {
    return {
      x: 0,
      y: 0,
      xdir: 0,
      ydir: 0
    }
  },
  methods: {
    update(e) {
      this.xdir = (e.movementX > 0) ? 1 : -1
      this.ydir = (e.movementY > 0) ? 1 : -1
      this.x = e.pageX
      this.y = e.pageY

    }
  },
  mounted() {
    window.addEventListener('mousemove', this.update)
  },
  unmounted() {
    window.removeEventListener('mousemove', this.update)
  }
}
</script>

<template>
  <slot :x="x" :y="y" :xdir="xdir" :ydir="ydir" />

</template>