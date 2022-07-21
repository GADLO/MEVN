import { createRouter, createWebHashHistory } from 'vue-router';

import web from './web';
import post from './post';
import labs from './labs';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/card',
    name: 'card',
    component: () => import('../components/Card.vue'),
  },
  {
    path: '/codeblocks',
    name: 'codeblocks',
    component: () => import('../pages/Codeblocks.vue'),
  },
  {
    path: '/servertest',
    name: 'servertest',
    component: () => import('../pages/ServerTest.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/About.vue'),
  },
  ...post,
  ...web,
  ...labs,
];

const router = createRouter({ history: createWebHashHistory(), routes });
export default router;
