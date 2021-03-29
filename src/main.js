import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";

import { auth, u } from "@/firebase.js";

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

let app;
auth.onAuthStateChanged((currentUser) => {
  u.setUser = currentUser;
  if (!app) {
    app = createApp(App).use(router);

    requireComponent.keys().forEach((fileName) => {
      const componentConfig = requireComponent(fileName);
      const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, "$1");
      app.component(componentName, componentConfig.default || componentConfig);
    });

    app.mount("#app");
  }
});
