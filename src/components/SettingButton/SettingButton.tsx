import { HexagonalFrame } from "../HexagonalFrame/HexagonalFrame";

export const SettingButton = () => {
  return (
    <div
      className="flex w-full h-full justify-center items-center p-[2px] relative"
      onClick={() => window.location.href = '/'}
    >
      <HexagonalFrame interactive={true} />
      <span className="text-white text-3xl font-serif w-[38%] absolute flex justify-center items-center [-webkit-text-stroke:_2px_#FEA237;] [paint-order:stroke_fill] pointer-events-none">
        ホーム
      </span>
    </div>
  );
};
