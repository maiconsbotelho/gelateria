import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#f9db79',
        secondaryColor: '#ac5d1c',
        shading: 'var(--shading)',
        cardShading: 'var(--cardShading)',
      },
      textShadow: {
        lg: '3px 5px 2px #474747',
      },

      boxShadow: {
        card: '2px 2px 15px 2px #d9dde1',
      },

      height: {
        '500': '500px',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
export default config;
