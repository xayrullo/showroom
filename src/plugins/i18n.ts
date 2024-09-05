import { createI18n } from "vue-i18n";
import uz from "@/locales/uz.json";
import ru from "@/locales/ru.json";
import en from "@/locales/en.json";
import { STORAGE_NAME, LOCALES } from "../utils/constants";

export type MessageSchema = typeof uz | typeof en | typeof ru;
import type { LanguageCode } from "../utils/constants";

const storedLocale = localStorage.getItem(STORAGE_NAME.LOCALE);
export const allLocales = LOCALES;

export const i18n = createI18n<[MessageSchema], LanguageCode>({
  legacy: false,
  locale: storedLocale || "en",
  fallbackLocale: "en",
  messages: {
    uz,
    ru,
    en,
  },
});

export const t = i18n.global.t;
