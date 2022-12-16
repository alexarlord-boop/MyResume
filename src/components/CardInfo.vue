<template>
  <div class="card">
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardInfo",
  props: {
    cardId: String,
    startX: Number,
    startY: Number
  }
}
</script>

<style scoped>

.card {
  font-size: 1.2em;
  text-align: center;

  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgb(132, 123, 123);
}

.card-content {
  font-family: "JetBrains Mono Light", monospace;
}


@media screen and (min-width: 601px){
  .card {
    max-width: 30em;
    min-width: 4em;
  }
}

</style>