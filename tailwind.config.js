/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
      animation: {
        'bounce-slow': 'bounce-slow 1s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { 
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': { 
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      boxShadow: {
        'logo-indigo': '0 8px 9px -6px rgba(102, 126, 234, 0.5)',
        'logo-indigo-big': '0 10px 25px 0 rgba(102, 126, 234, 0.5)',
        'frontpage': '8px 8px 30px 0 rgba(49, 46, 129, 0.2)',
        'frontpage-catWindow': '-8px 8px 30px 0 rgba(0,0,0,0.1)'
      },
      maxWidth: {
        '2xs': '16rem'
      },
      fontSize: {
        '2xs': '0.6rem'
      },
      padding: {
        '1.5': '0.375rem'
      }
    }
  },
  variants: {
    extend: {
    }
  },
};
