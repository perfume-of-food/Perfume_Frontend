import { useState } from "react";
import "./Conversation.css";
import { useIntroStore } from "@/stores/useIntroStore";
import { Step } from "@/types/steps";
export const Conversation = () => {
  const { step, getCurrentStepMessages, moveToNextStep } = useIntroStore();
  const conversation = getCurrentStepMessages(step);
  const [textIndex, setTextIndex] = useState(0);

  const handleClick = () => {
    if (textIndex === conversation.length - 1) {
      moveToNextStep();
    }
    const nextIndex = (textIndex + 1) % conversation.length;
    setTextIndex(nextIndex);
  };

  return (
    <div className="container">
      <div className="text-box" onClick={handleClick}>
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
            <text
              className="owner font-serif"
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              textLength="30%"
              lengthAdjust="spacing"
            >
              {step === Step.GREETING || step === Step.GREETING_CHOICE
                ? "???"
                : "店長"}
            </text>
          </svg>
        </div>

        <div className="absolute w-full h-full flex justify-center items-center bg-conversation">
          <div className="absolute right-12 bottom-6 h-[70%] animate-bounce flex flex-col justify-end">
            <div
              className="w-7 h-5  bg-orange "
              style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }}
            ></div>
          </div>

          <span className="w-[90%] h-[85%] font-dot text-[2rem] text-orange text-left">
            {conversation[textIndex]}
          </span>
        </div>
      </div>
    </div>
  );
};
