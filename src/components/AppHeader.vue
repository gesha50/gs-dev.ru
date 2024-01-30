<template>
  <q-header
    reveal
    :reveal-offset="10"
    elevated
    class="text-black"
    height-hint="98"
  >
    <q-toolbar>
      <q-btn
        class="xs"
        @click="$emit('drawer')"
        color="white"
        text-color="primary"
        round
        icon="menu"
      />
      <q-avatar class="q-mx-md q-my-sm">
        <img src="../assets/logo.png" alt="" />
      </q-avatar>
      <q-tabs
        v-model="tab"
        class="text-grey-9 q-ml-sm xs-hide"
        indicator-color="transparent"
        active-color="black"
        active-bg-color="white"
        shrink
        stretch
      >
        <q-route-tab
          v-for="menuItem in PageInformation"
          :key="menuItem.id"
          :to="menuItem.href"
          :label="$t(menuItem.label)"
        />
      </q-tabs>
      <q-space></q-space>
      <q-select filled v-model="locale" :options="localeOptions" emit-value />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n/dist/vue-i18n';
import { usePageInformationStore } from 'stores/page-information-store';
import { storeToRefs } from 'pinia/dist/pinia';
import { useLangStore } from 'stores/lang-store';

const tab = ref('');
const { locale } = useI18n({ useScope: 'global' });
const { PageInformation } = storeToRefs(usePageInformationStore());
const { localeOptions } = storeToRefs(useLangStore());

</script>

<style lang="scss">
.q-header {
  background: rgba(255, 255, 255, 1) !important;
}
.q-tab__label {
  font-family: 'RedHatDisplay-Black', serif;
}
.self-stretch {
  align-self: center;
}
</style>
