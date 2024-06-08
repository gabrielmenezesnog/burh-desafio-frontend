import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCirclePlus, faCalendar } from "@fortawesome/free-solid-svg-icons";
import router from "./router";

library.add(faCirclePlus, faCalendar);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
