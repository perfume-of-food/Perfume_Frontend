interface NameEntryButtonProps {
  onClick: () => void;
}
import { HexagonalFrame } from "@/components/HexagonalFrame/HexagonalFrame";

export const NameEntryButton = ({ onClick }: NameEntryButtonProps) => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div
        className="w-[70%] h-[40%] flex justify-center items-center relative "
        onClick={onClick}
      >
        <HexagonalFrame interactive={true} />
        <span className="text-white text-[2.5rem] font-dot font-medium inline-block absolute text-center [-webkit-text-stroke:_2px_#FEA237;] [paint-order:stroke_fill] pointer-events-none">
          入力する
        </span>
      </div>
    </div>
  );
};
