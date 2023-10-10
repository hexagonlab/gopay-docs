import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://hexagonlab.github.io/gopay-docs/",
  base: "/",
  integrations: [
    starlight({
      title: "GoPay",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
        "./src/fonts/font-face.css",
      ],
      social: {
        github: "https://github.com/hexagonlab/",
      },
      locales: {
        root: {
          label: "Mongolia",
          lang: "mn-MN",
        },
      },
      sidebar: [
        {
          label: "Эхлэл",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Холболт хийх",
              link: "/guides/integration/",
            },
          ],
        },
        {
          label: "GoPay API",
          autogenerate: {
            directory: "api",
          },
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
        {
          label: "Release notes",
          link: "/release-notes/release-v1",
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react({
      include: ["**/react/*"],
    }),
  ],
});
