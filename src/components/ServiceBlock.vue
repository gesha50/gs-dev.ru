<template>
  <section class="q-mt-xl column items-start">
    <div class="services__miniTitle">
      <title-block :title="$t('service.title')"></title-block>
    </div>
    <header-block
      :header="$t('service.description')"
      :link="link"
    ></header-block>
    <div class="services full-width items-start row justify-around">
      <service-block-list v-for="(item, i) in services" :key="i" :item="item" />
    </div>
  </section>
</template>

<script setup>
import HeaderBlock from '../components/HeaderBlock.vue';
import TitleBlock from '../components/TitleBlock.vue';
import ServiceBlockList from 'components/ServiceBlockList.vue';
import { storeToRefs } from 'pinia/dist/pinia';
import { useServiceStore } from 'stores/service-store';
defineProps({
  link: {type: String, required: false}
})
const { services } = storeToRefs(useServiceStore());
</script>

<style lang="scss">
.services {
  font-family: 'RedHatDisplay-Black', serif;
}
</style>
