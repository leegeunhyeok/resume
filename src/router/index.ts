import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Main from '@/components/pages/Main.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/home',
    name: 'Home',
    // Lazy loading
    component: () => import(/* webpackChunkName: "home" */ '@/components/pages/Home.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
