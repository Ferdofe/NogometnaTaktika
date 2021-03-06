module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-border':'#8bff85',
        'custom-bg':'#47236c',
        'custom-bg-gr':'#727e97',
        'custom-fg':'#4d556a',
        'custom-text':'#d8ffd6',
      },
      
    },
    linearBorderGradients: {
      directions: { // defaults to these values
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
      colors: { // defaults to {}
        'red': '#f00',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
      },
    },
    repeatingLinearBorderGradients: theme => ({
      directions: theme('linearBorderGradients.directions'), // defaults to the same values as linearBorderGradientsâ€™ directions
      colors: theme('linearBorderGradients.colors'), // defaults to {}
      lengths: { // defaults to {}
        'sm': '25px',
        'md': '50px',
        'lg': '100px',
      },
    }),
  },
  variants: {
    linearBorderGradients: ['responsive'], // defaults to ['responsive']
    repeatingLinearBorderGradients: ['responsive'], // defaults to ['responsive']
  },

    
  plugins: [require('tailwindcss-border-gradients')()],
}

