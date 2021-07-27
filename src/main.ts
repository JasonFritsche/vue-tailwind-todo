import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

const options: PluginOptions = {
  // You can set your default options here
};

app.use(Toast, options);
app.mount("#app");
