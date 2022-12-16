<template>
  <div class="signature" @mouseenter="turnHeartbeatOn" @mouseleave="turnHeartbeatOff">
    created with <span>
        <img class="icon" v-bind:class="{active: isSignActive}" src="https://img.icons8.com/fluency/48/null/pixel-heart.png"/>
      </span> by <span><a style="cursor: pointer;" href="https://github.com/alexarlord-boop">@alexarlod</a></span>
  </div>
</template>

<script>
export default {
  name: "Signature",
  data() {
    return {
      isSignActive: false
    }
  },
  methods: {
    turnHeartbeatOn() {
      this.isSignActive = true;
    },
    turnHeartbeatOff() {
      this.isSignActive = false
    }
  }
}
</script>

<style scoped>
.signature {
  width: 210px;
  position: absolute;
  bottom: 20px;
  font-size: 0.8em;
}

.icon {
  top: 5px;
  width: 25px;
  height: 25px;
  transition: ease-in 2s;
}

.icon.active {
  animation: icon-scale-heartbeat 3s;
  animation-iteration-count: infinite;
}

a, a:visited, a:active {
  color: #b3fcff;
}


@keyframes icon-scale-heartbeat {
  0% {
    transform: scale(1.1);
  }

  16% {
    transform: scale(1.5);
  }

  28% {
    transform: scale(1.1);
  }

  44% {
    transform: scale(1.5);
  }

  59% {
    transform: scale(1.1);
  }

  73% {
    transform: scale(1.5);
  }

  88% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }

}
</style>