const post = [
  {
    path: '/blog/posts',
    name: 'posts',
    component: import('../pages/post/Post.vue'),
  },
  {
    path: '/blog/post/:id',
    name: 'post',
    component: import('../pages/post/Posts.vue'),
  },
  {
    path: '/blog/updatepost/:id',
    name: 'updatepost',
    component: import('../pages/post/UpdatePost.vue'),
  },
  {
    path: '/blog/createpost',
    name: 'createpost',
    component: import('../pages/post/CreatePost.vue'),
  },
  {
    path: '/blog/deletepost',
    name: 'deletepost',
  },
];

export default post;
