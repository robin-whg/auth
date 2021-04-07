import { createRouter, createWebHistory } from "vue-router";
import NProgress from 'nprogress'
import { auth } from '@/firebase.js'

import { router as core } from '@/modules/core/index.js'
import { router as authentication } from '@/modules/authentication/index.js'

const routes = [
  ...core,
  ...authentication,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start()
  if(!auth.currentUser && to.meta.requiresAuth) next({ name: 'SignIn' })
  else next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router;
