import "./App.css";

import { SettingButton } from "./components/settingButton";
function App() {
  return (
    <div className="w-screen h-screen border-x-[32px] border-y-[28px] border-black">
    <div className="grid grid-rows-[repeat(100,1fr)] grid-cols-[repeat(100,1fr)] w-full h-full border-[10px] border-orange bg-black">
      <div className="row-[span_7_/_span_7] col-[span_73_/_span_73] border-b-[1px] border-r-[1px] border-orange">

      </div>
      <div className="row-[span_7_/_span_7] col-[span_27_/_span_27] border-b-[1px] border-orange">
        <SettingButton />
      </div>
      <div className="row-[span_71_/_span_71] col-[span_100_/_span_100] border-b-[1px] border-orange">

      </div>
      <div className="row-[span_22_/_span_22] col-[span_67_/_span_67] border-r-[1px] border-orange">

      </div>
      <div className="row-[span_22_/_span_22] col-[span_33_/_span_33]">

      </div>
    </div>
    </div>
  );
}

export default App;
