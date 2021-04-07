import { createRouter, createWebHistory } from "vue-router";
import NProgress from 'nprogress'

import { router as core } from '@/modules/core/index.js'
import { router as authentication, service as authenticationService } from '@/modules/authentication/index.js'

const routes = [
  ...authentication,
  ...core,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start()
  if(!authenticationService.auth.currentuser && to.meta.requiresauth) next({ name: 'SignIn' })
  else next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router;
