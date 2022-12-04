/** @type {import('tailwindcss').Config} */

function colorFactory(color) {
  return {
    100: `var(--color-${color}-100)`,
    200: `var(--color-${color}-200)`,
    300: `var(--color-${color}-300)`,
    400: `var(--color-${color}-400)`,
    500: `var(--color-${color}-500)`,
    600: `var(--color-${color}-600)`,
    700: `var(--color-${color}-700)`,
    800: `var(--color-${color}-800)`,
    900: `var(--color-${color}-900)`,
  };
}

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: colorFactory("primary"),
      text: colorFactory("text"),
      shape: colorFactory("shape"),
    },
  },
  plugins: [],
};
