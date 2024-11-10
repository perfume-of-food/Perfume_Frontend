import { useState } from "react";
import "./Conversation.css";
import { useGameManagerStore } from "@/stores/useGameManagerStore";
import { Step } from "@/types/Step";
import { formatMessage } from "@/utils/textUtils";
export const Conversation = () => {
  const {
    step,
    getCurrentStepMessages,
    moveToNextStep,
    userName,
    getPrimaryMoodItem,
  } = useGameManagerStore();
  const conversation = getCurrentStepMessages(step);
  const [textIndex, setTextIndex] = useState(0);

  const handleClick = () => {
    if (
      step === Step.GREETING_CHOICE ||
      step === Step.NAME_ENTRY ||
      step === Step.MOOD_SLIDER_FIRST ||
      step === Step.MOOD_SLIDER_SECOND ||
      step === Step.MOOD_CONFIRMATION ||
      step === Step.REASON_SHARING
    )
      return;

    if (textIndex === conversation.length - 1) {
      moveToNextStep();
    }
    const nextIndex = (textIndex + 1) % conversation.length;
    setTextIndex(nextIndex);
  };

  return (
    <div className="container">
      <div
        className="w-[809px] h-[178px] flex justify-center items-center relative"
        onClick={handleClick}
      >
        <div className="absolute -top-[64px] left-0 w-[190px] h-[64px]">
          <div className="flex w-full h-full justify-center items-center relative">
            <svg
              className="w-full h-full"
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
            </svg>
            <span className="text-white text-3xl font-serif w-20 absolute text-justify [text-align-last:justify] [-webkit-text-stroke:_2px_#FEA237;] [paint-order:stroke_fill] pointer-events-none">
              {[Step.GREETING, Step.GREETING_CHOICE].includes(step)
                ? "? ? ?"
                : "店長"}
            </span>
          </div>
        </div>

        <div className="absolute w-full h-full flex justify-center items-center bg-conversation">
          <div className="absolute right-12 bottom-6 h-[70%] animate-bounce flex flex-col justify-end">
            <div
              className="w-7 h-5  bg-orange "
              style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }}
            ></div>
          </div>

          <span className="w-[90%] h-[85%] font-dot text-[2rem] text-orange text-left">
            {conversation[textIndex] &&
              formatMessage(conversation[textIndex], {
                userName,
                primaryMood: getPrimaryMoodItem().name,
                primaryMoodDesc: getPrimaryMoodItem().desc,
              })}
          </span>
        </div>
      </div>
    </div>
  );
};
