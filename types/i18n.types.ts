import "i18next";
// import all namespaces (for the default language, only)
import en from "@/localization/en.json";
import tr from "@/localization/tr.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "tr";
    // custom resources type
    resources: {
      tr: typeof tr;
      en: typeof en;
    };
  }
}
