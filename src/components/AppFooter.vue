<template>
  <q-footer class="footer bg-white text-grey-9">
    <div style="max-width: 300px; margin: 20px auto">
      <div class="text-center footer__text">
        {{$t('footer.text')}}
      </div>
      <div class="q-mt-sm row justify-around">
        <a
          v-for="contact in contactWithMe"
          :key="contact.title"
          :href="contact.href"
          :target="contact.target"
        >
          <icon-custom
            :icon="contact.icon"
          />
        </a>
      </div>
    </div>
  </q-footer>
</template>

<script setup>
import IconCustom from '../components/IconCustom.vue'
import {storeToRefs} from "pinia/dist/pinia";
import {usePageInformationStore} from "stores/page-information-store";
const { contactWithMe } = storeToRefs(usePageInformationStore());
</script>

<style scoped>
.footer__text {
  font-family: Red Hat Display, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
  justify-content: center;
}
</style>
