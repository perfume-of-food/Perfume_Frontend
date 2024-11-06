import { useNavigate } from "react-router-dom";
import { HexagonalFrame } from "@/components/HexagonalFrame/HexagonalFrame";
import {Instruction} from "@/components/Instruction/Instruction";
import { useState } from "react";

export const HomeMenuButton = () => {
  const navigate = useNavigate();
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div className="flex flex-col w-full h-full justify-around items-center p-[2px] relative space-y-[50px]">
      <div
        className="w-[247px] h-[87px] flex justify-center items-center relative"
        onClick={() => navigate("/intro")}
      >
        <HexagonalFrame interactive={true} />
        <span className="text-3xl text-white font-serif absolute text-center [-webkit-text-stroke:_2px_#FEA237;] [paint-order:stroke_fill] pointer-events-none">
          スタート
        </span>
      </div>
      <div 
        className="w-[247px] h-[87px] flex justify-center items-center relative"
        onClick={() => setShowInstructions(true)}
      >
        <HexagonalFrame interactive={true} />
        <span className="text-3xl text-white font-serif absolute text-center [-webkit-text-stroke:_2px_#FEA237;] [paint-order:stroke_fill] pointer-events-none">
          注意事項
        </span>
      </div>

      {showInstructions && (
        <Instruction
          title="注意事項"
          onClose={() => setShowInstructions(false)}
        />
      )}
    </div>
  );
};
