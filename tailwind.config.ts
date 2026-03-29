import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#161613',
          dark: '#000000',
          light: '#1A1A1A',
        },
        sage: '#757575',
        mint: '#8FA89B',
        cream: '#FAF9F7',
        warmWhite: '#FFFFFF',
        linen: '#F5F3EF',
        stone: '#E8E4DD',
        driftwood: '#D4CFC5',
        terracotta: {
          DEFAULT: '#E15B3D',
          dark: '#C44D31',
        },
        gold: '#B8956E',
      },
      fontFamily: {
        heading: ['var(--font-copernicus)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'Inter', '-apple-system', 'system-ui', 'sans-serif'],
        nav: ['var(--font-inter)', 'Inter', '-apple-system', 'system-ui', 'sans-serif'],
        accent: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

export default config
