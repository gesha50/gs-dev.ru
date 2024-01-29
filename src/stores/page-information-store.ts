import { defineStore } from 'pinia';

export const usePageInformationStore = defineStore('counter', {
  state: () => ({
    PageInformation: {
      home: { id: 1, href: '', label: 'menu.index', icon: 'fas fa-home', separator: true },
      services: { id: 2, href: 'services', label: 'menu.services', icon: 'fas fa-code', separator: false },
      portfolio: { id: 3, href: 'works', label: 'menu.portfolio', icon: 'fas fa-briefcase', separator: false },
      contact: { id: 4, href: 'contact', label: 'menu.contact', icon: 'fas fa-phone', separator: false },
      certificates: { id: 5, href: 'certificates', label: 'menu.certificates', icon: 'fas fa-code', separator: false }
    },
    isDrawerOpen: false,
    contactWithMe: [
      {title: 'phone', icon: 'phone', target: '', href: 'tel:+79175433952'},
      {title: 'github', icon: 'fab fa-github', target: '_blank', href: 'https://github.com/gesha50?tab=repositories'},
      {title: 'instagram', icon: 'fab fa-instagram', target: '_blank', href: 'https://www.instagram.com/gesha50/'},
      {title: 'telegram', icon: 'fab fa-telegram-plane', target: '_blank', href: 'https://tlgg.ru/@dev_gesha'},
    ]
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
