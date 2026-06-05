export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00d4ff',
          gold: '#ffd700',
          purple: '#9d00ff',
          cyan: '#00f0ff',
        }
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      keyframes: {
        glitch: {
          '0%': { textShadow: '-2px 0 #00d4ff, 2px 0 #ff00ff' },
          '25%': { textShadow: '2px 0 #00d4ff, -2px 0 #ff00ff' },
          '50%': { textShadow: '-1px 0 #00d4ff, 1px 0 #ff00ff' },
          '75%': { textShadow: '1px 0 #00d4ff, -1px 0 #ff00ff' },
          '100%': { textShadow: '-2px 0 #00d4ff, 2px 0 #ff00ff' },
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
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 212, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)' }
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
