import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { useNuxtApp } from "#app";

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    theme: {
      defaultTheme: "customTheme",
      themes: {
        customTheme: {
          dark: false,
          colors: {
            primary: "#1A5319",
            secondary: "#80AF81",
            accent: "#508D4E",
            background: "#FFFFFF",
            surface: "#F1F1F1",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
            gray: "#3E3E3E",
            lightGray: "#DDDDDD",
            darkGray: "#000000",
            lightGreen: "#D6EFD8",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
