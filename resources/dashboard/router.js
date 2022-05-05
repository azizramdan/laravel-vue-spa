import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/dashboard',
    name: 'index',
    component: import('./components/Index.vue'),
  },
  {
    path: '/dashboard/posts',
    name: 'posts.index',
    component: import('./components/Posts/Index.vue'),
  },
  {
    path: '/dashboard/posts/:id',
    name: 'posts.show',
    component: import('./components/Posts/Show.vue'),
  },
  {
    path: '/dashboard/posts/create',
    name: 'posts.create',
    component: import('./components/Posts/Create.vue'),
  },
  {
    path: '/dashboard/users',
    name: 'users.index',
    component: import('./components/Users/Index.vue'),
  },
  {
    path: '/dashboard/users/create',
    name: 'users.create',
    component: import('./components/Users/Create.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router