<template>
  <section class="certificates q-mt-xl column items-start">
    <div class="certificates__miniTitle">
      <title-block
        :title="$t('certificates.title')"
      ></title-block>
    </div>
    <header-block
      :header="$t('certificates.description')"
      :link="'/certificates'"
    ></header-block>
    <div class="certificates__body full-width row q-mt-lg">
      <div v-for="(img, i) in images" :key="i" class="col-6 col-sm-3">
        <div class="text-center row column certificatesCard">
          <q-img
            :src="getImageUrl(img.path)"
            :ratio="1"
            :fit="'contain'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderBlock from '../components/HeaderBlock.vue';
import TitleBlock from '../components/TitleBlock.vue';
import {storeToRefs} from "pinia/dist/pinia";
import {useCertificateStore} from "stores/certificate-store";
import {useI18n} from "vue-i18n/dist/vue-i18n";
const { locale } = useI18n({ useScope: 'global' });

const { images } = storeToRefs(useCertificateStore())

const getImageUrl = (name) => {
  return new URL(`../assets/img/certificates/${locale.value}/${name}`, import.meta.url).href
}

</script>

<style lang="scss" scoped>
.q-img {
  transition: 1s;
}
.q-img:hover {
  transform: scale(2, 2);
  z-index: 1;
}
</style>
