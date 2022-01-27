const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/config/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-lighter': 'var(--purple-lighter)',
        secondary: 'var(--secondary)',
        'secondary-lighter': 'var(--orange-lighter)',
        third: 'var(--third)',
        danger: 'var(--red)',
        warning: 'var(--yellow)',
        'light-warning': 'var(--yellow-light)',
        success: 'var(--purple-lighter)',
        'light-success': 'var(--purple-light)',
        info: 'var(--blue)',
        'light-info': 'var(--blue-light)',
        gray: {
          ...defaultTheme.colors.gray,
          '900': '#424242'
        }
      },
      fontFamily: {
        'heading': ['"Hind Madurai"', 'Helvetica', 'Arial', '"sans-serif"'],
        'body': ['"Hind Madurai"', 'Helvetica', 'Arial', '"sans-serif"']
      }
    },
  },
  plugins: [],
}
