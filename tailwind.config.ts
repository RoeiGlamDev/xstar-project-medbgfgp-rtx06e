import { defineConfig } from 'tailwindcss';

/
 * Custom Tailwind CSS configuration for luxery dark AirBNB
 * This configuration applies a pink and black color scheme
 * suitable for a technology-focused luxury accommodation brand.
 */
export default defineConfig({
  darkMode: 'class', // Enable dark mode support
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#FF66B2', // Light pink shade for accents
          DEFAULT: '#FF007F', // Default pink shade
          dark: '#FF0050', // Darker pink for deeper accents
        },
        black: {
          DEFAULT: '#000000', // Pure black for backgrounds
          light: '#1A1A1A', // Light black for card backgrounds
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
});