import "./App.css";

import { SettingButton } from "./components/SettingButton/SettingButton";
// import { NextButton } from "./components/NextButton/NextButton";
import { SelectButton } from "./components/SelectButton/SelectButton";
function App() {
  return (
    <div className="w-screen h-screen border-x-[32px] border-y-[28px] border-black">
      <div className="grid grid-rows-[repeat(100,1fr)] grid-cols-[repeat(100,1fr)] w-full h-full border-[10px] border-orange bg-black">
        <div className="relative row-[span_7_/_span_7] col-[span_73_/_span_73] border-b-[1px] border-r-[1px] border-orange">
          <span className="leading-none font-playfair text-[8.3em] inline-block -translate-x-[0.7rem] -translate-y-[1.9rem] text-orange">
            MENU
          </span>
        </div>
        <div className="row-[span_7_/_span_7] col-[span_27_/_span_27] border-b-[1px] border-orange">
          <SettingButton />
        </div>
        <div className="row-[span_71_/_span_71] col-[span_100_/_span_100] border-b-[1px] border-orange"></div>
        <div className="row-[span_22_/_span_22] col-[span_67_/_span_67] border-r-[1px] border-orange">
          <div className="flex flex-col justify-around w-full h-full ">
            <span className="flex justify-around leading-none font-dot text-[1.75rem] leading-[1.5] text-beige">
              <span>
                「この店がどうやって
                <br />
                　始まったのか？」
              </span>
              <span>--------</span>
              <span> 1</span>
            </span>
            <span className="flex justify-around leading-none font-dot text-[1.75rem] leading-[1.5] text-beige">
              <span>「店長は何者ですか？」</span>
              <span>--------</span>
              <span> 2</span>
            </span>
          </div>
        </div>
        <div className="row-[span_22_/_span_22] col-[span_33_/_span_33]">
          {/* <NextButton /> */}
          <SelectButton />
        </div>
      </div>
    </div>
  );
}

export default App;
