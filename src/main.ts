import { createApp } from "vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";
import "./style.css";

const vuetify = createVuetify({
  components,
  directives,
  theme: {},
});

console.debug = function (desc, ...args) {
  console.group(`DEBUG:${desc}:`);
  args.forEach((arg) => console.log(typeof arg, arg));
  console.groupEnd();
};

createApp(App).use(router).use(store, key).use(vuetify).mount("#app");
