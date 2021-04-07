const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "core" */"./views/Home.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import(/* webpackChunkName: "core" */"./views/Settings.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "core" */"./views/NotFound.vue"),
  },
];

export default routes
