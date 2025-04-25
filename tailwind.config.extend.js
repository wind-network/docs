/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      maxWidth: {
        '[1400px]': '1400px',
      },
    },
  },
  // Enable JIT mode for better handling of dynamic class names
  mode: 'jit',
  // Set an empty array for future arbitrary values
  future: {
    respectDefaultRingColorOpacity: true,
    disableColorOpacityUtilitiesByDefault: true,
    relativeContentPathsByDefault: true,
  },
} 