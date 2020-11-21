import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Hello from '@/components/pages/Hello.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'hello',
    component: Hello,
  },
  {
    path: '/home',
    name: 'home',
    // Lazy loading
    component: () => import(/* webpackChunkName: "home" */ '@/components/pages/Home.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
