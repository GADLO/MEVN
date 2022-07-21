const web = [
  {
    path: '/explore',
    name: 'explore',
    component: () => import('../pages/webs/Explore.vue'),
  },
  {
    path: '/tools',
    name: 'tools',
    component: () => import('../pages/webs/Tools.vue'),
  },
  {
    path: '/createweb',
    name: 'createweb',
    component: () => import('../pages/webs/CreateWeb.vue'),
  },
  {
    path: '/updateweb/:id',
    name: 'updateweb',
    component: () => import('../pages/webs/UpdateWeb.vue'),
  },
  {
    path: '/outsite',
    name: 'outsite',
    component: () => import('../pages/webs/Outsite.vue'),
  },
];

export default web;
