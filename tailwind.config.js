/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00a2ff",

          secondary: "#4f5100",

          accent: "#00a01c",

          neutral: "#18181d",

          "base-100": "#fffdf9",

          info: "#007aff",

          success: "#00ae00",

          warning: "#ffd200",

          error: "#db002c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
