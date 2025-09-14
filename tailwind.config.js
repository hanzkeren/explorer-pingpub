/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yes: '#3fb68b',
        no: '#ff5353',
        info: '#00b2ff',
        main: 'var(--text-main)',
        secondary: 'var(--text-secondary)',
        active: 'var(--bg-active)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: '#00E5A8',
          accent: '#00E5A8',
          neutral: '#0b1220',
          'base-100': '#f9fafb',
          'base-200': '#eef2f7',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          primary: '#00E5A8',
          accent: '#00E5A8',
          'base-100': '#0b1220',
          'base-200': '#111a2b',
          'base-300': '#0f1626',
          neutral: '#0b1220',
        },
      },
    ],
  },
};
