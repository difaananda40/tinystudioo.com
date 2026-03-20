// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://tinystudioo.com",
  integrations: [tailwind(), sitemap()],
  ...(import.meta.env.SITE && {
    site: import.meta.env.SITE,
  }),
  ...(import.meta.env.BASE_URL && {
    base: import.meta.env.BASE_URL,
  }),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
