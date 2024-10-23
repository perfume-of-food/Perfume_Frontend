import "./settingButton.css";

export const SettingButton = () => {
  return (
    <div className="w-full h-full p-[3px]">
      <button className="w-full h-full c-button">
        <span className="text-white text-3xl font-serif font-medium w-1/3 inline-block [text-align-last:justify] [-webkit-text-stroke:_2px_#FEA237;] 
        [paint-order:stroke_fill]">設定</span>
      </button>
    </div>
  );
};
