/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    colors:{
      'background': '#011627',
      'second-background': '#011221',
      'purple': '#4D5BCE',
      'orange': '#E99287',
      'green': '#43D9AD',
      'primary': '#E5E9F0',
      'secondary': '#607B96',
    },
    fontFamily:{
      fira: ['Fira Code', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}

