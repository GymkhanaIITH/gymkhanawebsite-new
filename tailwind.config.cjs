/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        r: "#ff3b43",
        p: "#190d57",
        g: "#07cebb",
        w: "#ffffff",
      },
    },
    boxShadow: {
      button: "0px 1px 8px 2px #23232330",
    },
  },
  plugins: [],
};
