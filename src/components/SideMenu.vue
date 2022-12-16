<template>
  <div class="sideMenu" @mouseover="activate" @mouseleave="deactivate">
    <ul class="menu-item-list" v-bind:class="{active : isActive}">
      <li v-for="(i, index) in items" v-bind:id="'it' + (index + 1)" class="menu-item" @click="transitTo(index + 1)">
        <p v-if="isActive" class="item-title">{{ i.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  data() {
    return {
      isActive: false,
      pressedItem: 1,
      items: [
        {title: 'resume'},
        {title: 'fintech'},
        {title: 'library'}]
    }
  },
  methods: {
    activate() {
      this.isActive = true;
      setTimeout(() => {
        for (let i = 1; i <= 3; i++){
          document.getElementById("it" + i).classList.add('active');
        }
        console.log("menu activated")
      }, 100);
    },
    deactivate() {
      this.isActive = false;
      for (let i = 1; i <= 3; i++){
        document.getElementById("it" + i).classList.remove('active');
      }
    },
    transitTo(hookN) {

      document.getElementById(hookN + '').scrollIntoView({behavior: 'smooth'});
    },
    resetPointStyle(nToSkip) {
      for (let i = 1; i <= 3; i++) {
        if (i === nToSkip) {
          continue;
        }
        let item = document.getElementById("it" + i);
        item.style.backgroundColor = "rgba(255,255,255, 50%)";
        item.style.boxShadow = "";
      }
    },
    updateFocusedPoint(n) {
      this.resetPointStyle(n);
      let item = document.getElementById("it" + n);
      item.style.backgroundColor = "rgba(255,255,255, 100%)";
      item.style.border = "1px solid";
      item.style.boxShadow = "0px 0px 15px #fff";
    },
    scrollHandler() {
      let toScroll = document.body.scrollHeight;
      if ((window.scrollY <= toScroll / 3)) {
        this.updateFocusedPoint(1);
      }
      if ((window.scrollY > toScroll / 6) && (window.scrollY < toScroll / 6 * 3)) {
        this.updateFocusedPoint(2);
      }
      if (window.scrollY >= toScroll / 2) {
        this.updateFocusedPoint(3);
      }
    }
  },
  mounted() {
    this.transitTo(1);
    window.addEventListener('scroll', this.scrollHandler);
    this.updateFocusedPoint(1);
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>

<style scoped>
.sideMenu {
  top: 10px;
  right: 40px;
  position: fixed;
  width: 250px;
}

.menu-item-list {
  list-style: none;
  text-decoration: none;
  transform: scale(0.5);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: 0.3s ease-in-out;
}

.menu-item-list.active {
  transform: scale(1);

}


.menu-item {
  width: 100px;
  height: 15px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 70%);
  margin-top: 25px;

  text-align: center;
  font-size: 1.4em;
  cursor: pointer;
  pointer-events: none;

  transition: 0.3s ease-in-out;
}

.menu-item.active {
  pointer-events: all;
}

.item-title {
  position: relative;
  right: 100px;
  top: -12px;
  font-family: "Roboto Mono", monospace;
  color: #f2f2f2;
  font-weight: 800;

  width: 100px;
  border-radius: 15px;
  background-color: #181818;
}

@media screen and (min-width: 325px) and (max-width: 600px) {
  .sideMenu {
    top: 10px;
    right: -40px;
  }

  /*.menu-item {*/
  /*  width: 20px;*/
  /*  height: 20px;*/
  /*}*/
}

</style>