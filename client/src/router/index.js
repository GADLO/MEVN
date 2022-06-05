import { createRouter, createWebHashHistory } from 'vue-router';

import Card from '../components/Card.vue';
import Home from '../pages/Home.vue';
import Codeblocks from '../pages/Codeblocks.vue';
import ServerTest from '../pages/ServerTest.vue';
import { Explore, Tools, CreateWeb } from '../pages/webs';
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
  ...post,
  ...web,
];

const router = createRouter({ history: createWebHashHistory(), routes });
export default router;
