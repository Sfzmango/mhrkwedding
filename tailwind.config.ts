import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'chestnut': '#A8503B',
        'hunyadi-yellow': '#F0AE43',
        'bistre': '#41251A',
        'olive': '#877841',
        'drab-dark-brown': '#55421E',
        'sunset': '#F9D290',
        'murrey': '#841B47',
      },
      fontFamily: {
        'art-nouveau': ['P22ArtNouveau', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'redwood-pattern': "url('/images/redwood-pattern.png')",
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-up-delayed': 'fade-in-up 0.8s ease-out 0.2s forwards',
      },
    },
  },
  plugins: [],
}

export default config 