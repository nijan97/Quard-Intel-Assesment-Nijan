/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      maxWidth: {
      'screen-xl': '1440px',  // Set the max width for xl screens to 1440px
    },
      colors: {
        background: "var(--background)", 
        foreground: "var(--foreground)", 
        
        // Text color shades 100-900
        100: '#EFF2F8',   // Lightest shade for text
        200: '#B8C0CE',
        300: '#9CA6BA',
        400: '#717C93',
        500: '#58647E',   // Default text color
        600: '#3F4D6A',
        700: '#1A2949',
        800: '#0B1835',
        900: '#020A1A',   // Darkest shade for text

        // Primary color shades 100-900
        primary: {
          100: '#F6E9F6',   // Lightest primary color
          200: '#F1D7F1',
          300: '#C193BF',
          400: '#A770A5',
          500: '#794477',   // Default primary color
          600: '#712F6E',
          700: '#631C60',
          800: '#3F0A3D',
          900: '#170116',   // Darkest primary color
        },
      },
    },
  },
  plugins: [],
};
