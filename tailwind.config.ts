import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-button': '#7F56D9',
        'primary-text': '#101828',
        'secondary-text': '#344054',
        tertiary: '#475467',
      },
      backgroundColor: {
        secondary: '#F9FAFB',
      },
      borderColor: {
        primary: '#D0D5DD',
        secondary: '#EAECF0',
        secondaryButton: '#D6BBFB',
        secondaryButtonGray: '#D0D5DD',
      },
      gap: {
        xs: '8px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '40px',
      },
      padding: {
        md: '12px',
        xl: '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
