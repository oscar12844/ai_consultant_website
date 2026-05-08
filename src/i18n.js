import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import zhTW from "./locales/zh-TW.json";

const savedLocale = localStorage.getItem("icw-locale") || "zh-TW";

export default createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: "en",
  messages: {
    en,
    "zh-TW": zhTW,
  },
});
