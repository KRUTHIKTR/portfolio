/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#06040A",
        space: "#06040A",
        indigoSpace: "#0D0B14",
        nebulaViolet: "#130F26",
        glassBg: "#161224",
        electricPurple: "#8B5CF6",
        cosmicBlue: "#3B82F6",
        hyperCyan: "#06B6D4",
        emeraldGreen: "#10B981",
        spotifyGreen: "#06b6d4",
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'slow-drift': 'drift 20s ease-in-out infinite',
        'slow-drift-reverse': 'drift-reverse 25s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '50%': { transform: 'translate(10px, 15px) rotate(3deg)' },
        },
        'drift-reverse': {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '50%': { transform: 'translate(-10px, -15px) rotate(-3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
