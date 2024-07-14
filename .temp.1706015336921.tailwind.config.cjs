/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative:true,
    transform: (content) => content.replace(/taos:/g, ''),
    files:["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      colors: {
        r: "#ff3b43",
        p: "#190d57",
        g: "#07cebb",
        w: "#ffffff",
      },
    },
    extend: {
      height: {
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      },
    },
    boxShadow: {
      button: "0px 1px 8px 2px #23232330",
    },
  },
  plugins: [ require('taos/plugin')],
};
