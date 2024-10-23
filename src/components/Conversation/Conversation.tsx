import { useState } from "react";
import "./Conversation.css";

export const Conversation = () => {
  const texts = ["ようこそ、私たちの特別な場所へ。", "変更", "完了"]; 
  const [textIndex, setTextIndex] = useState(0);

  const handleClick = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); 
  };

  return (
    <div className="w-full h-full">
      <span
        onClick={handleClick} 
        className="text-white text-3xl font-serif font-medium w-1/3 inline-block [text-align-last:justify] [-webkit-text-stroke:_2px_#FEA237;] [paint-order:stroke_fill] cursor-pointer"
      >
        {texts[textIndex]} 
      </span>
    </div>
  );
};
