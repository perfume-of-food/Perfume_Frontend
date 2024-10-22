/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', ],
      serif: ['YuMincho', 'Yu Mincho', ],
      mono: ['ui-monospace', 'SFMono-Regular',],
    },
    extend: {
      colors: {
        orange: "#FEA237",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FEA237",
          secondary: "#ff00ff",
          accent: "#00ffff",
          neutral: "#ff00ff",
          "base-100": "#c7d2fe",
          info: "#0000ff",
          success: "#00ff00",
          warning: "#00ff00",
          error: "#059669",
        },
      },
    ],
  },
  plugins: [daisyui],
};
