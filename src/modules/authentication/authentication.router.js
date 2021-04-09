export default [
  {
    path: "/sign_in",
    name: "SignIn",
    component: () => import(/* webpackChunkName: "authentication" */"./views/SignIn.vue"),
    meta: {
      fullscreen: true,
    },
  },
  {
    path: "/reset_password",
    name: "ResetPassword",
    component: () => import(/* webpackChunkName: "authentication" */"./views/ResetPassword.vue"),
    meta: {
      fullscreen: true,
    },
  },
];
