export default [
  {
    path: "/sign_up",
    name: "SignUp",
    component: () => import(/* webpackChunkName: "authentication" */"../views/SignUp.vue"),
    meta: {
      fullscreen: true,
    },
  },
  {
    path: "/sign_in",
    name: "SignIn",
    component: () => import(/* webpackChunkName: "authentication" */"../views/SignIn.vue"),
    meta: {
      fullscreen: true,
    },
  },
  {
    path: "/reset_password",
    name: "ResetPassword",
    component: () => import(/* webpackChunkName: "authentication" */"../views/ResetPassword.vue"),
    meta: {
      fullscreen: true,
    },
  },
];
