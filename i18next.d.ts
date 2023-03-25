import "i18next";

// import all namespaces (for the default language, only)
import translation from "public/locales/de/translation.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    defaultNS: "translations";
    resources: {
      translation: typeof translation;
    };
  }
}