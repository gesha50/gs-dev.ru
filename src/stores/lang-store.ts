import { defineStore } from 'pinia';

export const useLangStore = defineStore('lang', {
  state: () => ({
    localeOptions: [
      { value: 'en-US', label: 'English' },
      { value: 'ru', label: 'Russia' },
    ]
  }),
  getters: {
    //
  },
  actions: {
    //
  },
});
