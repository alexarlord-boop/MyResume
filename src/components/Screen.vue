<template>
  <div class="back">
    <div class="container">
      <div data-tilt class="content" v-on:click="expand = !expand">

        <div class="title"><slot name="title"></slot></div>
        <div class="comment"><slot name="comment"></slot></div>
      </div>

      <Signature></Signature>
    </div>
  </div>
</template>

<script>
import MouseTracker from "@/components/MouseTracker.vue";
import MovingContainer from "@/components/MovingContainer.vue";
import Signature from "@/components/Signature.vue";

export default {
  name: "Screen",
  props: {
    animationType: String,
    screenId: Number
  },
  data() {
    return {
      focused: false,
      expand: false
    };
  },
  components: {
    MouseTracker,
    MovingContainer,
    Signature
  }
}
</script>

<style scoped>
.back {
  width: auto;
  height: 100vh;
  margin: 0;
  padding: 0;

  color: #ffffff;
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
}


.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content {
  width: 80vw;
  height: 80vh;

  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 2em;
}

.comment {
  font-size: 1.3em;
}

</style>