import { useState } from "react";
import "./Conversation.css";

export const Conversation = () => {
  const texts = ["ようこそ、私たちの特別な場所へ。", "第二句话", "第三句话"]; 
  const [textIndex, setTextIndex] = useState(0);

  const handleClick = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); 
  };

  return (
    <div className="container">
      <div className="text-box">
        
        <div className="svg-container">
          <svg
            className="top-left-svg"
            preserveAspectRatio="none"
            viewBox="0 0 247 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.18924 5.38553L9.86979 0.5H237.13L246.5 10.2801V76.7199L241.811 81.6145L237.13 86.5H9.86979L5.18924 81.6145L0.5 76.7199V10.2801L5.18924 5.38553Z"
              fill="#FEA237"
              fillOpacity="0.2"
              stroke="#FEA237"
            />
            <text className="owner"
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  textLength="30%" 
                  lengthAdjust="spacing"
                  >
                    店長
                  </text>
          </svg>

          <svg 
            className="svg-background" 
            viewBox="0 0 809 178" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0.5,0.5 H808.5 V177.5 H0.5 Z" 
              stroke="#FFFFFF" 
              strokeWidth="1" 
              strokeOpacity="0.3" 
              fill="#474747"
            />
            <path 
              d="M705,135 L733,135 L719,155 Z"
              fill="#FEA237" 
              className="triangle animate-bounce cursor-pointer" 
              onClick={handleClick} 
            />
          </svg>
        </div>

        <span className="displayed-text">
          {texts[textIndex]} 
        </span>
      </div>
    </div>
  );
};
