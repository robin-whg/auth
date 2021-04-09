import { createApp } from "vue";
import App from "./App.vue";
import store from './store'
import router from "./router";
import "./assets/style.css";

const requireComponent = require.context(
  "./components/base",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

async function init() {
  await store.dispatch('authentication/setUser')
  const app = createApp(App).use(store).use(router);

  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, "$1");
    app.component(componentName, componentConfig.default || componentConfig);
  });

  app.mount("#app"); 
}

init()