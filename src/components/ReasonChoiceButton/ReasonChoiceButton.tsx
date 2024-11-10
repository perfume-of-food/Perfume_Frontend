import { useState } from "react";
import { HexagonalFrame } from "../HexagonalFrame/HexagonalFrame";
import { useGameManagerStore } from "@/stores/useGameManagerStore";
import { ReasonInputPanel } from "@/components/ReasonInputPanel/ReasonInputPanel";

interface ReasonChoiceButtonProps {
  onClick: () => void;
}

export const ReasonChoiceButton = ({ onClick }: ReasonChoiceButtonProps) => {
  const { setFoodChoiceReason } = useGameManagerStore();
  const [isInputPanelOpen, setIsInputPanelOpen] = useState(false);

  return (
    <div className="flex flex-col w-full h-full justify-between items-center p-[20px] relative">
      <ReasonChoiceButtonItem
        label="1にする"
        onClick={() => {
          setFoodChoiceReason("1");
          console.log("Setting reason to:", "1");
          console.log("Current reason after setting:", useGameManagerStore.getState().foodChoiceReason);
          onClick();
        }}
      />
      <ReasonChoiceButtonItem
        label="2にする"
        onClick={() => {
          setFoodChoiceReason("2");
          console.log("setFoodChoiceReason(2)");
          onClick();
        }}
      />
      <ReasonChoiceButtonItem
        label="入力する"
        onClick={() => setIsInputPanelOpen(true)}
      />
      {isInputPanelOpen && (
        <ReasonInputPanel
          onClose={() => setIsInputPanelOpen(false)}
          onConfirm={(value: string) => {
            setFoodChoiceReason(value);
            console.log("setFoodChoiceReason(value)");
            onClick();
          }}
        />
      )}
    </div>
  );
};

interface ReasonChoiceButtonItemProps {
  label: string;
  onClick: () => void;
}

const ReasonChoiceButtonItem = ({
  label,
  onClick,
}: ReasonChoiceButtonItemProps) => (
  <div
    className="w-[70%] h-[30%] flex justify-center items-center relative "
    onClick={onClick}
  >
    <HexagonalFrame interactive={true} />

    <span className="text-white text-4xl font-dot inline-block absolute text-center [-webkit-text-stroke:_2px_#FEA237;] [paint-order:stroke_fill] pointer-events-none">
      {label}
    </span>
  </div>
);
