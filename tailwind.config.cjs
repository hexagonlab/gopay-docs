const starlightPlugin = require("@astrojs/starlight-tailwind");

// Generated color palettes
const accent = {
  200: "#c3c3f4",
  600: "#664ddb",
  900: "#2f2764",
  950: "#211d43",
};
const gray = {
  100: "#f5f6fb",
  200: "#ecedf7",
  300: "#c0c1cd",
  400: "#8989a0",
  500: "#56566b",
  700: "#36364a",
  800: "#252437",
  900: "#171720",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { accent, gray },
      fontFamily: {
        sans: ['"Montserrat"'],
        // Your preferred code font. Starlight uses system monospace fonts by default.
        mono: ['"IBM Plex Mono"'],
      },
    },
  },
  plugins: [starlightPlugin()],
};
