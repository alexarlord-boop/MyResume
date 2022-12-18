<template>
  <ScreenIntro>
    <Screen id="1">
      <template v-slot:title>My Resume</template>
      <template v-slot:comment></template>
      <template v-slot:button><TransitButton :lnk="'/resume'"></TransitButton></template>
    </Screen>
  </ScreenIntro>


  <ScreenFinapp>
    <Screen id="2">
      <template v-slot:title>Fin Keep App</template>
      <template v-slot:comment>
        <p>Deal with expenses as fast as possible!</p>
        <p>Charts, calculator, profit locator</p>
      </template>
      <template v-slot:button><TransitButton :lnk="'/'"></TransitButton></template>
    </Screen>
  </ScreenFinapp>

  <ScreenLib>
    <Screen id="3" :screen-id="3">
      <template v-slot:title>Neapolis University Library</template>
      <template v-slot:comment>Software for booking and loaning Knowledge</template>
      <template v-slot:button><TransitButton :lnk="'/'"></TransitButton></template>
    </Screen>
  </ScreenLib>


  <SideMenu></SideMenu>

</template>

<script>
import Screen from "@/components/Screen.vue";
import SideMenu from "@/components/SideMenu.vue";
import ScreenLib from "@/components/ScreenLib.vue";
import ScreenFinapp from "@/components/ScreenFinapp.vue";
import ScreenIntro from "@/components/ScreenIntro.vue";
import TransitButton from "@/components/TransitButton.vue";

export default {
  name: "ScreenChoice",
  components: {
    TransitButton,
    Screen,
    ScreenIntro,
    ScreenFinapp,
    ScreenLib,
    SideMenu
  }
}
</script>

<style scoped>

</style>