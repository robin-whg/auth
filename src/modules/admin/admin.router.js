const routes = [
    {
      path: "/user_management",
      name: "UserManagement",
      component: () => import(/* webpackChunkName: "admin" */"./views/UserManagement.vue"),
      meta: {
          requiresAuth: true
      }
    },
  ];
  
  export default routes
  