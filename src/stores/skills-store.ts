import { defineStore } from 'pinia';

export const useSkillsStore = defineStore('skills', {
  state: () => ({
    images: [
      {
        path: 'laravel.png',
        borderColor: '#FFE7F0',
        color: '#FFF7FA',
        text: 'Laravel',
      },
      {
        path: 'vue.png',
        borderColor: '#CAFFE1',
        color: '#EDFFF5',
        text: 'Vue js',
      },
      {
        path: 'quasar.png',
        borderColor: '#DDF5FF',
        color: '#F5FCFF',
        text: 'Quasar',
      },
      {
        path: 'db.svg',
        borderColor: '#FFEEC9',
        color: '#FFFBF2',
        text: 'MySQL',
      },
    ]
  }),
  getters: {
    //
  },
  actions: {
    //
  },
});
