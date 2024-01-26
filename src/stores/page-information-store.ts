import { defineStore } from 'pinia';

export const usePageInformationStore = defineStore('counter', {
  state: () => ({
    PageInformation: {
      home: { id: 1, href: '', label: 'home', icon: 'fas fa-home', separator: true },
      services: { id: 2, href: 'services', label: 'services', icon: 'fas fa-code', separator: false },
      works: { id: 3, href: 'works', label: 'works', icon: 'fas fa-briefcase', separator: false },
      contact: { id: 4, href: 'contact', label: 'contact', icon: 'fas fa-phone', separator: false },
      certificates: { id: 5, href: 'certificates', label: 'certificates', icon: 'fas fa-code', separator: false }
    },
    isDrawerOpen: false
  }),
  getters: {
    //
  },
  actions: {
    triggerDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen
    },
    screenWidthForDrawer(width: number) {
      if (width > 599) {
        this.isDrawerOpen = false;
      }
    }
  },
});
