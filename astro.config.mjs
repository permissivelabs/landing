import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://permissive.dev',
  integrations: [tailwind(), sitemap(), robotsTxt()],
  output: "server",
  adapter: vercel()
});