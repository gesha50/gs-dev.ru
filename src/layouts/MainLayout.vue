<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          gs-developer
        </q-toolbar-title>
        <div>
          <q-select
            v-model="locale"
            :options="localeOptions"
            label="Choose language"
            dense
            borderless
            emit-value
            map-options
            options-dense
            style="min-width: 150px"
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })
const localeOptions = ref([
  { value: 'en-US', label: 'English' },
  { value: 'ru', label: 'Russia' }
])
</script>
