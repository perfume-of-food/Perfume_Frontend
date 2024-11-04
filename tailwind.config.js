/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Hiragino Mincho Pro"],
      playfair: ["Playfair Display SC Regular"],
      dot: ["DotGothic16 Regular"],
    },
    extend: {
      colors: {
        orange: "#FEA237",
        beige: "#FFEFD0",
        conversation: "#474747",
      },
      animation: {
        // 自定义 bounce 动画，1.5s 持续时间，可调整
        "bouncing": "bouncing 1.5s infinite ease-in-out",
      },
      keyframes: {
        "bouncing": {
          "0%, 100%": { transform: "translateY(10)" },
          "50%": { transform: "translateY(-20px)" }, // 控制弹跳高度为10px
        },
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
