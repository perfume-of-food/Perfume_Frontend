import { SettingButton } from "../../components/SettingButton/SettingButton";
import { GreetingChoiceButton } from "../../components/GreetingChoiceButton/GreetingChoiceButton";
import { MenuHero } from "../../components/MenuHero/MenuHero";
import { Conversation } from "../../components/Conversation/Conversation";
import { HintText } from "@/components/HintText/HintText";
import { NameEntryButton } from "@/components/NameEntryButton/NameEntryButton";

import { useIntroStore } from "../../stores/useIntroStore";
import { Step } from "@/types/steps";
import { GreetingChoice } from "@/components/GreetingChoice/GreetingChoice";
import { useState } from "react";
import { InputPanel } from "@/components/InputPanel/InputPanel";

export function Intro() {
  const { step, moveToNextStep } = useIntroStore();

  const [showInputPanel, setShowInputPanel] = useState(false);
  return (
    <div className="w-screen h-screen border-x-[32px] border-y-[28px] border-black">
      <div className="grid grid-rows-[repeat(100,1fr)] grid-cols-[repeat(100,1fr)] w-full h-full border-[10px] border-orange bg-black">
        {/* 左上: MENU 标题 */}
        <div className="relative row-[span_7_/_span_7] col-[span_73_/_span_73] border-b-[1px] border-r-[1px] border-orange">
          <span className="leading-none font-playfair text-[8.3em] inline-block -translate-x-[0.7rem] -translate-y-[1.9rem] text-orange">
            MENU
          </span>
        </div>
        {/* 右上: 设置按钮 */}
        <div className="row-[span_7_/_span_7] col-[span_27_/_span_27] border-b-[1px] border-orange">
          <SettingButton />
        </div>
        {/* 中:  */}
        <div className="grid grid-rows-subgrid grid-cols-subgrid row-[span_50_/_span_50] col-[span_100_/_span_100]">
          <MenuHero />
        </div>
        <div className="flex items-center justify-center row-[span_21_/_span_21] col-[span_100_/span_100] border-b-[1px] border-orange">
          <Conversation />
        </div>
        {/* 左下: 空的弹性盒子区域 */}
        <div className="row-[span_22_/_span_22] col-[span_67_/_span_67] border-r-[1px] border-orange">
          {(step === Step.GREETING || step === Step.OWNER_INTRO) && (
            <HintText>吹き出しをタップして続ける</HintText>
          )}
          {step === Step.GREETING_CHOICE && <GreetingChoice />}
          {step === Step.NAME_ENTRY && (
            <HintText>名前を入力してください</HintText>
          )}
        </div>
        {/* 右下: 选择按钮区域 */}
        <div className="row-[span_22_/_span_22] col-[span_33_/_span_33]">
          {step === Step.GREETING_CHOICE && (
            <GreetingChoiceButton onClick={() => moveToNextStep()} />
          )}
          {step === Step.NAME_ENTRY && (
            <NameEntryButton onClick={() => setShowInputPanel(true)} />
          )}
        </div>
      </div>
      {showInputPanel && (
        <InputPanel
          onClose={() => {
            setShowInputPanel(false);
          }}
          onConfirm={() => {
            moveToNextStep();
          }}
        />
      )}
    </div>
  );
}
