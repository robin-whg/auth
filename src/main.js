import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";

import { auth } from "@/firebase.js";

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

auth.onAuthStateChanged(() => {
  const app = createApp(App).use(router);

  requireComponent.keys().forEach((fileName) => {
    console.log(fileName);
    const componentConfig = requireComponent(fileName);
    const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, "$1");
    app.component(componentName, componentConfig.default || componentConfig);
  });

  app.mount("#app");
});
