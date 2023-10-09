import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "GoPay",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/fonts/font-face.css",
        "./src/tailwind.css",
      ],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Getting started",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Integration guide",
              link: "/guides/integration/",
            },
          ],
        },
        {
          label: "GoPay API",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "GoPay API",
              link: "/api/api/",
            },
          ],
        },
        {
          label: "Reference",
          link: "/release-notes/release-v1",
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
