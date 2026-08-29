// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://courageous-gingersnap-8ff747.netlify.app",
  integrations: [preact()]
});