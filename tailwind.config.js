/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brown": {
          "100": "#ECE0D1",
          "300": "#DBC1AC",
          "600": "#967259",
          "900": "#634832"
        }
      }
    },

    boxShadow: {
      "light": "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      "dark": " 0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
    },
    dropShadow: {
      glow: [
        "0 0px 20px rgba(255,255, 255, 0.35)",
        "0 0px 65px rgba(255, 255,255, 0.2)"
      ]
    },

    // borderRadius: {
    //   "4xl": "2rem",
    // },
    fontFamily: {
      "Dana": "Dana",
      "DanaMedium": "Dana Medium",
      "DanaDemiBold": "Dana DemiBold",
      "MorabbaLight": "Morabba light",
      "MorabbaMedium": "Morabba Medium",
      "MorabbaBold": "Morabba Bold",
    }
  },
  plugins: [],
};
