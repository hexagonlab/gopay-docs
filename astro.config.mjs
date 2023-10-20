import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://developer.gopay.mn/",
  base: "/",
  integrations: [
    starlight({
      title: "GoPay",
      logo: {
        dark: "./src/assets/logo_dark.png",
        light: "./src/assets/logo.png",
        replacesTitle: true,
      },
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
              link: "/",
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
          label: "Нууцлалын бодлого",
          link: "/term-privacy/privacy",
        },
        {
          label: "Үйлчилгээний нөхцөл",
          link: "/term-privacy/terms",
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
  ],
});
