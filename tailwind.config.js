module.exports = {
  content: [
    './*.html',
    './views/**/*.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(217, 28%, 15%)',
        darkBlue1: 'hsl(218, 28%, 13%)',
        darkBlue2: 'hsl(216, 53%, 9%)',
        darkBlue3: 'hsl(219, 30%, 18%)',
        accentCyan: 'hsl(176, 68%, 64%)',
        accentBlue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 63%)',
      },
      fontFamily: {
        spartan: ['LeagueSpartan', 'sans-serif']
      },
      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('../images/icons/logo-new.svg')",
        'logo-light-mode': "url('../images/icons/logo-new.svg')",
        'curvy-dark-mode': "url('../images/bg-curvy-dark.svg')",
        'curvy-light-mode': "url('../images/bg-curvy-light.svg')",
        'head-covert-audio': "url('../images/cards/covertAudio.jpeg')",
        'head-image-exhibition': "url('../images/cards/imageExhibition.jpeg')",
        'head-myd': "url('../images/cards/myD.jpeg')",
        'head-rowley-dean': "url('../images/cards/rowleyDean.jpeg')",
        'head-portfolio': "url('../images/cards/portfolio.jpeg')",
        'hobby-general': "url('../images/cards/generalHobbies.jpeg')",
        'hobby-tech': "url('../images/cards/techHobbies.jpeg')",
        'hobby-interest': "url('../images/cards/currentInterests.jpeg')",
        'exp-sg': "url('../images/experience/sg-logo.png')"
      }),
      maxWidth: {
        '1/2': '50%',
        '1/3': '33%',
      },
      animation: {
        'fadeIn': 'fadeInFrame 2s ease-in forwards',
        'gradient-x':'gradient-x 15s ease infinite',
        'gradient-y':'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'fadeInFrame': {
          '0%': { 'opacity': '0' },
          '100%': { 'opacity': '1' }
        },
        'gradient-y': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'center top'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'center center'
            }
        },
        'gradient-x': {
            '0%, 100%': {
                'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
        'gradient-xy': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
      },

    },
  },
  
  variants: {
    animation: ["motion-safe"],
    backgroundImage: ['dark'],
  },
  plugins: [],
}
