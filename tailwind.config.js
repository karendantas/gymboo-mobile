/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./src/*/**', './src/components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',

        secondary: 'var(--color-secondary)',
        'secondary-dark': 'var(--color-secondary-dark)',

        base: 'var(--color-base)',
        'base-dark': 'var(--color-base-dark)',

        text: 'var(--color-text)',
        'text-dark': 'var(--color-text-dark)',

        hydration: 'var(--color-hydration)',
        'hydration-dark': 'var(--color-hydration-dark)',

        button: 'var(--color-button)',
        'button-dark': 'var(--color-button-dark)',

        danger: 'var(--color-danger)',
        light: 'var(--color-light)',
      },
    },
  },
  plugins: [],
};
