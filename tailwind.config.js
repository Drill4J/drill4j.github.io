/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './build/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: () => ({
        'git-hub': "url('/imgs/git-hub.svg')",
        telegram: "url('/imgs/telegram.svg')",
        twiter: "url('/imgs/twiter.svg')",
        youtube: "url('/imgs/youtube.svg')",
        menu: "url('/imgs/menu.svg')",
        close: "url('/imgs/close.svg')",
      }),
      screens: {
        mxs: '360px',
        xs: '425px',
        ...defaultTheme.screens,
      },
      container: {
        padding: {
          mxs: '16px',
          xs: '16px',
          sm: '16px',
          md: '24px',
          lg: '32px',
          xl: '160px',
          '2xl': '288px',
        },
      },
      spacing: {
        3: '0.75rem',
        18: '4.5rem',
        21: '5.25rem',
        22: '5.5rem',
        25: '6.25rem',
        26: '6.5rem',
        27: '6.75rem',
        29: '7.25rem',
        30: '7.5rem',
        31: '7.75rem',
        34: '8.5rem',
        42: '9.5rem',
        43: '9.75rem',
        54: '13.5rem',
        58: '14.5rem',
        62: '15.5rem',
        66: '16.5rem',
        70: '17.5rem',
        88: '22rem',
        97: '25rem',
        98: '26rem',
        100: '28rem',
        108: '30rem',
      },
      height: {
        fit: 'fit-content',
      },
    },
    minWidth: {
      '32px': '32px',
    },
    colors: {
      transparent: 'transparent',
      blue: {
        default: '#2f8eea',
        shade: '#1a6fc7',
        'medium-tint': '#5aa3ef',
        'light-tint': '#eaf4fc',
        'ultralight-tint': '#cfe4fb',
      },
      monochrome: {
        black: '#0c2438',
        white: '#ffffff',
        default: '#5a7186',
        shade: '#16324a',
        'dark-tint': '#8a9bab',
        'medium-tint': '#d3dee8',
        'light-tint': '#f6fafc',
      },
      green: {
        default: '#1bbf9a',
        shade: '#149a7c',
        'medium-tint': '#48ccae',
        'light-tint': '#e8f8f3',
        success: '#1bbf9a',
      },
      red: {
        default: '#e4565c',
        shade: '#d3484e',
        'medium-tint': '#eb787c',
        'light-tint': '#fef1f2',
        'ultralight-tint': '#fef1f2',
      },
      yellow: {
        default: '#e6c56a',
        shade: '#c9992e',
        'medium-tint': '#efd89a',
        'light-tint': '#fff8e8',
      },
      orange: {
        default: '#f0a04b',
        shade: '#c9992e',
        'medium-tint': '#f5b872',
        'light-tint': '#fff8e8',
      },
      'data-visualization': {
        'scrollbar-thumb': '#d3dee8',
        coverage: '#2f8eea',
        overlapping: '#1a6fc7',
        'scope-cover': '#90caf9',
        'saved-time': '#1bbf9a',
        auto: '#1aabb8',
        manual: '#90caf9',
      },
    },
    fontFamily: {
      bold: ['Space Grotesk', 'Figtree', 'sans-serif'],
      regular: ['Figtree', 'Segoe UI', 'sans-serif'],
      light: ['Figtree', 'Segoe UI', 'sans-serif'],
    },
    fontSize: {
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      26: '26px',
      28: '28px',
      30: '30px',
      32: '32px',
      40: '40px',
      48: '48px',
    },
    lineHeight: {
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      26: '26px',
      28: '28px',
      30: '30px',
      32: '32px',
      34: '34px',
      36: '36px',
      38: '38px',
      40: '40px',
      48: '48px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.link': {
          backgroundColor: 'transparent',
          color: '#2f8eea',
          cursor: 'pointer',
        },
        '.link:hover': {
          color: '#1a6fc7',
        },
        '.link:active': {
          color: '#1a6fc7',
        },
        '.text-ellipsis': {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        '.gray-link': {
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: '500',
          color: '#5a7186',
        },
        '.gray-link:hover': {
          color: '#2f8eea',
          textDecorationLine: 'underline',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
  corePlugins: {
    container: false,
  },
};
