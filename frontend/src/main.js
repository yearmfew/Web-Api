import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(i18n);
app.mount("#app");
