import { createRouter, createWebHashHistory } from 'vue-router';

import Card from '../components/Card.vue';
import {
  Home,
  About,
  Codeblocks,
  ServerTest,
  Outsite,
} from '../pages';
import {
  Explore,
  Tools,
  CreateWeb,
  UpdateWeb,
} from '../pages/webs';
import {
  CreatePost,
  Posts,
  UpdatePost,
  Post,
} from '../pages/post';

const post = [
  {
    path: '/blog/posts',
    name: 'posts',
    component: Posts,
  },
  {
    path: '/blog/post/:id',
    name: 'post',
    component: Post,
  },
  {
    path: '/blog/updatepost/:id',
    name: 'updatepost',
    component: UpdatePost,
  },
  {
    path: '/blog/createpost',
    name: 'createpost',
    component: CreatePost,
  },
  {
    path: '/blog/deletepost',
    name: 'deletepost',
  },
];

const web = [
  {
    path: '/explore',
    name: 'explore',
    component: Explore,
  },
  {
    path: '/tools',
    name: 'tools',
    component: Tools,
  },
  {
    path: '/createweb',
    name: 'createweb',
    component: CreateWeb,
  },
  {
    path: '/updateweb/:id',
    name: 'updateweb',
    component: UpdateWeb,
  },
];

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/card',
    name: 'card',
    component: Card,
  },
  {
    path: '/codeblocks',
    name: 'codeblocks',
    component: Codeblocks,
  },
  {
    path: '/servertest',
    name: 'servertest',
    component: ServerTest,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/outsite',
    name: 'outsite',
    component: Outsite,
  },
  ...post,
  ...web,
];

const router = createRouter({ history: createWebHashHistory(), routes });
export default router;
