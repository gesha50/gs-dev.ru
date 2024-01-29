<template>
  <div class="customIcon relative-position">
    <q-icon class="absolute" :name="icon"></q-icon>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: { type: String, required: true }
})
</script>

<style lang="scss">
.customIcon {
  background: url("../assets/img/background_mini.png") no-repeat center center;
  background-size: contain;
  width: 50px;
  height: 60px;
& .q-icon {
    top: calc(50% - 12.5px);
    left: calc(50% - 12.5px);
    font-size: 25px;
    color: white;
  }
}
</style>
