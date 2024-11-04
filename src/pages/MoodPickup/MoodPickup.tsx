import { SettingButton } from "@/components/SettingButton/SettingButton";
import { MoodPanel } from "@/components/MoodPanel/MoodPanel";
import { MoodDescription } from "@/components/MoodDescription/MoodDescription";
import { DetermineButton } from "@/components/DetermineButton/DetermineButton";
import ConfirmPanel from "@/components/ConfirmPanel/ConfirmPanel";
import { useMoodPanelStore } from "@/stores/useMoodPanelStore";
import { useState } from "react";
import { useGameManagerStore } from "@/stores/useGameManagerStore";
export function MoodPickup() {
  const { moveToNextStep } = useGameManagerStore();
  const { selectedMood, setDescriptionFlash } = useMoodPanelStore();
  const [showConfirmPanel, setShowConfirmPanel] = useState(false);

  return (
    <div className="w-screen h-screen border-x-[32px] border-y-[28px] border-black">
      <div className="grid grid-rows-[repeat(100,1fr)] grid-cols-[repeat(100,1fr)] w-full h-full border-[10px] border-orange bg-black">
        {/* 右上: MENU 标题 */}
        <div className="relative row-[span_7_/_span_7] col-[span_73_/_span_73] border-b-[1px] border-r-[1px] border-orange">
          <span className="leading-none font-playfair text-[8.3em] inline-block -translate-x-[0.7rem] -translate-y-[1.9rem] text-orange">
            MENU
          </span>
        </div>
        {/* 左上: 设置按钮 */}
        <div className="row-[span_7_/_span_7] col-[span_27_/_span_27] border-b-[1px] border-orange">
          <SettingButton />
        </div>
        {/* 中:  */}
        <div className="row-[span_71_/_span_71] col-[span_100_/span_100] border-b-[1px] border-orange">
          <div className="flex w-full h-[5rem] justify-center items-center">
            <span className="font-serif text-4xl text-white [-webkit-text-stroke:_3px_#FEA237;] [paint-order:stroke_fill]">
              ｜感情の円環｜
            </span>
          </div>
          <div className="w-full px-[2%]">
            <MoodPanel />
          </div>
        </div>
        {/* 左下: 空的弹性盒子区域 */}
        <div className="row-[span_22_/_span_22] col-[span_67_/_span_67] border-r-[1px] border-orange">
          <MoodDescription />
        </div>
        {/* 右下: 选择按钮区域 */}
        <div className="row-[span_22_/_span_22] col-[span_33_/_span_33]">
          <DetermineButton
            onClick={() => {
              if (selectedMood) {
                setShowConfirmPanel(true);
              } else {
                setDescriptionFlash(true);
                setTimeout(() => {
                  setDescriptionFlash(false);
                }, 300);
              }
            }}
          />
        </div>
      </div>
      {showConfirmPanel && (
        <ConfirmPanel
          title={selectedMood}
          onClose={() => {
            setShowConfirmPanel(false);
          }}
          onConfirm={() => {
            moveToNextStep();
          }}
          showButtons={true}
        />
      )}
    </div>
  );
}
