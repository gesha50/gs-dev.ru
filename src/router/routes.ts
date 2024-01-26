import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'services', component: () => import('pages/ServicePage.vue') },
      { path: 'works', component: () => import('pages/WorkPage.vue') },
      { path: 'contact', component: () => import('pages/ContactPage.vue') },
      { path: 'certificates', component: () => import('pages/CertificatePage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
