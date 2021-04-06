import { createApp } from "vue";
import App from "./App.vue";
import store from './store'
import router from "./router";
import "./assets/style.css";

import { auth } from "@/firebase.js";

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

let app;
auth.onAuthStateChanged((currentUser) => {
  store.dispatch('auth/setUser', currentUser)
  if (!app) {
    app = createApp(App).use(store).use(router);

    requireComponent.keys().forEach((fileName) => {
      const componentConfig = requireComponent(fileName);
      const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, "$1");
      app.component(componentName, componentConfig.default || componentConfig);
    });

    app.mount("#app");
  }
});
