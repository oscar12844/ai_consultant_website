import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import i18n from "./i18n.js";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

createApp(App).use(router).use(i18n).mount("#app");
