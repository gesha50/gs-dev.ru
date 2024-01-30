<template>
  <div class="titleBlock">
    <div class="titleBlock__text">{{ title }}</div>
    <div class="titleBlock__line"></div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
});
</script>

<style lang="scss">
@import '../css/app';

.titleBlock {
  &__text {
    color: $my_purple_2;
    font-size: 18px;
  }
  &__line {
    height: 2px;
    width: 60%;
    background: $my_purple_2;
  }
}
</style>
