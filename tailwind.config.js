/** Earthy palette inspired by Ajanta mural pigments */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        terracotta: '#B5532F',
        sandstone: '#D9B98A',
        cream: '#F6EBD6',
        bark: '#4A2C1A',
        gold: '#B8923A',
        lapis: '#2F4A5A',
      },
      fontFamily: {
        display: ['"Palatino Linotype"', 'Palatino', '"Book Antiqua"', 'Georgia', 'serif'],
        body: ['"Trebuchet MS"', 'Verdana', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
