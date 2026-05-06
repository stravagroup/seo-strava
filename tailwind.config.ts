import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#F5A543',
          light: '#F7B862',
          dark: '#D4882A',
        },
        charcoal: '#1A1A1A',
        offwhite: '#F4F4F2',
      },
    },
  },
  plugins: [],
}

export default config
