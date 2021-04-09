import { createRouter, createWebHistory } from "vue-router";
import NProgress from 'nprogress'

import { router as core } from '@/modules/core/index.js'
import { router as authentication } from '@/modules/authentication/index.js'
import store from './store'

const routes = [
  ...authentication,
  ...core,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const isAuthenticated = await store.getters['authentication/isAuthenticated']
  console.log(isAuthenticated)
  console.log(store.state.authentication.user)
console.log(to.meta.requiresAuth)
  if(!isAuthenticated && to.meta.requiresAuth) next({ name: 'SignIn' })
  else next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router;
