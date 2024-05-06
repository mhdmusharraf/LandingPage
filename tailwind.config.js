/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'interstellar-blue': 'rgba(28, 189, 221, 1)',
        'rich-blue': 'rgba(77, 202, 121, 1)',
        'yuzu-jam':'rgba(242, 141, 53, 1)',
      },
    },
  },
  plugins: [],
};
