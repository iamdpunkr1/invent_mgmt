/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
                    
            "primary": "#2b468b",
            "secondary": "#e78b38",
            "accent": "#fcecdc",
            "neutral": "#7499f1",
            "base-100": "#ffffff",
            "info": "#3abff8",
            "success": "#36d399",
            "warning": "#fbbd23",
            "error": "#f87272",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}

