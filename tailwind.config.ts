import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--brand-primary)',
          secondary: 'var(--brand-secondary)',
          tertiary: 'var(--brand-tertiary)',
        },
        point: {
          purple: 'var(--point-purple)',
          blue: 'var(--point-blue)',
          cyan: 'var(--point-cyan)',
          pink: 'var(--point-pink)',
          rose: 'var(--point-rose)',
          orange: 'var(--point-orange)',
          yellow: 'var(--point-yellow)',
        },
        background: {
          primary: 'var(--background-primary)',
          secondary: 'var(--background-secondary)',
          tertiary: 'var(--background-tertiary)',
          inverse: 'var(--background-inverse)',
        },
        interaction: {
          inactive: 'var(--interaction-inactive)',
          hover: 'var(--interaction-hover)',
          pressed: 'var(--interaction-pressed)',
          focus: 'var(--interaction-focus)',
        },
        border: {
          primary: 'rgba(var(--border-primary), <alpha-value>)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          default: 'var(--text-default)',
          inverse: 'var(--text-inverse)',
          disabled: 'var(--text-disabled)',
        },
        status: {
          danger: 'var(--status-danger)',
        },
        icon: {
          primary: 'var(--icon-primary)',
          inverse: 'var(--icon-inverse)',
          brand: 'var(--icon-brand)',
        },
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(90deg, var(--brand-primary) 0%, var(--brand-tertiary) 100%)',
        'background-gradient':
          'linear-gradient(270deg, var(--background-secondary) 0%, var(--background-secondary) 62.05%, rgba(30, 41, 59, 0.00) 127.63%)',
        'landig-intro-large-img': "url('/images/landing/intro-large-bg.png')",
        'landig-intro-medium-img': "url('/images/landing/intro-medium-bg.png')",
        'landig-intro-small-img': "url('/images/landing/intro-small-bg.png')",
        'landig-bottom-large-img': "url('/images/landing/bottom-large-bg.png')",
        'landig-bottom-medium-img':
          "url('/images/landing/bottom-medium-bg.png')",
        'landig-bottom-small-img': "url('/images/landing/bottom-small-bg.png')",
      },
      boxShadow: {
        light: '0px 0px 12px 2px rgba(255, 255, 255, 0.25)',
        dark: '0px 0px 12px 2px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: ['1.2rem', '1.4rem'],
        sm: ['1.3rem', '1.6rem'],
        md: ['1.4rem', '1.7rem'],
        base: ['1.6rem', '1.9rem'],
        lg: ['1.6rem', '1.9rem'],
        '2lg': ['1.8rem', '2.1rem'],
        xl: ['2rem', '2.4rem'],
        '2xl': ['2.4rem', '2.8rem'],
        '3xl': ['3.2rem', '3.8rem'],
        '4xl': ['4rem', '4.8rem'],
        '5xl': ['4.8rem', '5.7rem'],
        '6xl': ['6.4rem', '7.6rem'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(100%)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out forwards',
        'fade-out': 'fadeOut 0.3s ease-in-out forwards',
        'slide-up': 'slideUp 0.3s ease-in-out forwards',
        'slide-down': 'slideDown 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
