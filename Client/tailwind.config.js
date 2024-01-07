/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT(
  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
      extend: {
        height: {
          '40vh': '40vh',
        },
        spacing: {
          '99': '9vh', // Agrega el nuevo valor para el margen superior
        }
      },
    },
    // eslint-disable-next-line no-undef
    plugins: [require("tw-elements/dist/plugin.cjs")]
  }
)

