import { SettingButton } from "../../components/SettingButton/SettingButton";
// import { NextButton } from "./components/NextButton/NextButton";
// import { SelectionText } from "../../components/SelectionText/SelectionText";
import { SelectButton } from "../../components/SelectButton/SelectButton";
import { MoodPanel } from "../../components/MoodPanel/MoodPanel";
export function MoodDashboard() {
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
              ｜サーカムプレックス｜
            </span>
          </div>
          <div className="w-full px-[2%]">
            <MoodPanel />
          </div>
        </div>
        {/* 左下: 空的弹性盒子区域 */}
        <div className="row-[span_22_/_span_22] col-[span_67_/_span_67] border-r-[1px] border-orange">
          <div className="w-full h-full flex justify-center items-center font-dot text-[1.75rem] leading-[1.5] text-beige text-opacity-60">
            名前を入力してください
          </div>
        </div>
        {/* 右下: 选择按钮区域 */}
        <div className="row-[span_22_/_span_22] col-[span_33_/_span_33]">
          {/* <NextButton /> */}
          <SelectButton />
        </div>
      </div>
    </div>
  );
}
