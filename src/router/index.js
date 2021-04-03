import { createRouter, createWebHistory } from "vue-router";
import NProgress from 'nprogress'
import { auth } from '@/firebase.js'

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/sign_up",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
    meta: {
      fullscreen: true
    }
  },
  {
    path: "/sign_in",
    name: "SignIn",
    component: () => import("../views/SignIn.vue"),
    meta: {
      fullscreen: true
    }
  },
  {
    path: "/reset_password",
    name: "ResetPassword",
    component: () => import("../views/ResetPassword.vue"),
    meta: {
      fullscreen: true
    }
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue")
  }
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
