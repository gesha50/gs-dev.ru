<template>
  <q-drawer
    side="right"
    v-model="isDrawerOpen"
    :width="200"
    :breakpoint="599"
    bordered
    overlay
    class="bg-grey-3"
  >
    <q-scroll-area class="fit">
      <q-list>
        <template v-for="menuItem in PageInformation" :key="menuItem.id">
          <q-item clickable :to="menuItem.href" exact v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ $t(menuItem.label) }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + menuItem.id" v-if="menuItem.separator" />
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import { storeToRefs } from 'pinia/dist/pinia';
import { usePageInformationStore } from 'stores/page-information-store';

const { PageInformation } = storeToRefs(usePageInformationStore());
const { isDrawerOpen } = storeToRefs(usePageInformationStore());
</script>

<style lang="scss"></style>
