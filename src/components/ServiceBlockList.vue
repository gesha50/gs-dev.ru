<template>
  <div class="col-12 col-sm-6 col-md-4 q-pa-md serviceBlock">
    <div class="row items-center">
      <icon-custom :icon="item.icon" />
      <div class="serviceBlock__title q-ml-md">{{ $t(item.title) }}</div>
    </div>
    <div class="serviceBlock__description">{{ $t(item.description) }}</div>
  </div>
</template>

<script setup>
import IconCustom from '../components/IconCustom.vue';

defineProps({
  item: { type: Object, required: true },
});
</script>

<style scoped></style>
