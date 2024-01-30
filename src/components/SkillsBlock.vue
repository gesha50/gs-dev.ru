<template>
  <section class="skills q-mt-xl column items-start">
    <div class="skills__miniTitle">
      <title-block :title="$t('skills.title')" />
    </div>
    <header-block :header="$t('skills.description')" />
    <div class="skills__body full-width row q-mt-lg">
      <div v-for="(img, i) in images" :key="i" class="col-6 col-sm-3">
        <div
          class="text-center row column q-pa-sm skillsCard"
          :style="
            'border: 1px solid ' +
            img.borderColor +
            ';' +
            'background: ' +
            img.color +
            ';' +
            'box-shadow: 0px 0px 53px 43px ' +
            img.color +
            ';'
          "
        >
          <q-img
            :src="getImageUrl(img.path)"
            spinner-color="white"
            style="max-width: 60px; margin: 0 auto"
          />
          <span class="q-mt-md">{{ img.text }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderBlock from '../components/HeaderBlock.vue';
import TitleBlock from '../components/TitleBlock.vue';
import { storeToRefs } from 'pinia/dist/pinia';
import { useSkillsStore } from 'stores/skills-store';

const { images } = storeToRefs(useSkillsStore());

const getImageUrl = (name) => {
  return new URL(`../assets/img/skills/${name}`, import.meta.url).href;
};
</script>

<style lang="scss">
.skillsCard {
  justify-content: center;
  margin: auto;
  width: 150px;
  height: 150px;
  border-radius: 5px;
}
</style>
