module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        tools: {
          primary: "#570DF8",
          secondary: "#f6d860",
          accent: "#37CDBE",
          neutral: "#3d4451",
          info: "#3ABFF8",
          warning: "#FBBD23",
          "base-100": "#ffffff",

        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
