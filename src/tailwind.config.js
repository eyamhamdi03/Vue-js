export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  safelist: [
    {
      pattern: /bg-(gray|green|blue|red|yellow|purple)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
