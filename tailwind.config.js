export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        love: {
          primary: '#ff1493',      // Deep pink
          secondary: '#ff69b4',    // Hot pink
          light: '#ffb6c1',        // Light pink
          dark: '#c71585',         // Medium violet red
          accent: '#ff6b9d',       // Rose pink
        }
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      keyframes: {
        glitch: {
          '0%': { textShadow: '-2px 0 #ff1493, 2px 0 #ff69b4' },
          '25%': { textShadow: '2px 0 #ff1493, -2px 0 #ff69b4' },
          '50%': { textShadow: '-1px 0 #ff1493, 1px 0 #ff69b4' },
          '75%': { textShadow: '1px 0 #ff1493, -1px 0 #ff69b4' },
          '100%': { textShadow: '-2px 0 #ff1493, 2px 0 #ff69b4' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        pulse_neon: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 20, 147, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 20, 147, 0.8)' }
        }
      },
      animation: {
        glitch: 'glitch 0.3s infinite',
        typewriter: 'typewriter 3s steps(40, end) forwards',
        float: 'float 3s ease-in-out infinite',
        pulse_neon: 'pulse_neon 2s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
