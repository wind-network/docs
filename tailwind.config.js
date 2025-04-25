/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './node_modules/fumadocs-ui/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    '2xl:max-w-container',
    '2xl:max-w-7xl',
    'max-w-4xl',
    'max-w-lg',
    'max-w-xl',
    'max-w-2xl',
    'max-w-3xl'
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        '2xl': '1536px',
      },
      maxWidth: {
        '4xl': '56rem',
        '7xl': '80rem',
        'container': '1400px',
        '[1400px]': '1400px',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} 