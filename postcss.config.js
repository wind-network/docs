module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      config: './tailwind.config.js',
      mode: 'jit',
    },
    autoprefixer: {},
  },
}
