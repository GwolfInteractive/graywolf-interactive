/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gw: {
          deep: "#04060d",
          navy: "#070b16",
          elevated: "#0c1222",
          card: "#0e1628",
          cyan: "#3db8ff",
          "cyan-bright": "#5ec8ff",
          "cyan-dim": "#1a7ab8",
        },
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
