import { useNavigate } from "react-router-dom";
import { HexagonalFrame } from "../HexagonalFrame/HexagonalFrame";

export const HomeMenuButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full h-full justify-around items-center p-[2px] relative space-y-[50px]">
      <div
        className="w-[247px] h-[87px] flex justify-center items-center relative"
        onClick={() => navigate("/intro")}
        style={{ cursor: "pointer" }}
      >
        <HexagonalFrame interactive={true} />
        <span className="text-3xl text-white font-serif absolute text-center [-webkit-text-stroke:_2px_#FEA237;] [paint-order:stroke_fill] pointer-events-none">
          スタート
        </span>
      </div>
      <div className="w-[247px] h-[87px] flex justify-center items-center relative">
        <HexagonalFrame />
        <span className="text-3xl text-white font-serif absolute text-center [-webkit-text-stroke:_2px_#FEA237;] [paint-order:stroke_fill] pointer-events-none">
          使用説明
        </span>
      </div>
    </div>
  );
};
