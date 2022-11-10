import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./router/router.js";

createApp(App).use(List).mount("#app");
