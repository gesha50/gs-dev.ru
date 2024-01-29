import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    portfolio: [
      {
        path: 'tclvovo.jpg',
      },
      {
        path: 'medical.jpg',
      },
      {
        path: 'tb.jpg',
      },
    ],
  }),
  getters: {
    //
  },
  actions: {
    //
  },
});
