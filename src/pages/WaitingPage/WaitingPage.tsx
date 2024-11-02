import { SettingButton } from "@/components/SettingButton/SettingButton";
import plane from "@/assets/plane.png";
import receipt from "@/assets/receipt.png";
import styles from "./WaitingPage.module.css";

export function WaitingPage() {
  return (
    <div className="w-screen h-screen border-x-[32px] border-y-[28px] border-black">
      <div className="grid grid-rows-[repeat(100,1fr)] grid-cols-[repeat(100,1fr)] w-full h-full border-[10px] border-orange bg-black relative">
        {/* 图片和文字 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-10">
          <div className="relative">
            {/* plane */}
            <img src={plane} alt="plane" className="relative z-10" />
            {/* receipt*/}
            <img
              src={receipt}
              alt="receipt"
              className="absolute inset-0 m-auto z-20 animate-bouncing"
            />
          </div>

          {/* Loading文字和边框 */}
          <div className="relative flex flex-col items-center">
            {/* 上边框 */}
            <div
              className="border-t-[1px] border-b-[1px] border-orange mb-2"
              style={{ width: "50%" }}
            ></div>
            {/* 文字 */}
            <div className="font-serif text-4xl leading-[1.2] text-orange [-webkit-text-stroke:_2.5px_#FFFFFF;] [paint-order:stroke_fill] text-center">
              料理を準備中です。
              <br />
              しばらくお待ちください
              <span className="absolute">
                <span className={styles["loading-dots"]}></span>
              </span>
            </div>
            {/* 下边框 */}
            <div
              className="border-t-[1px] border-b-[1px] border-orange mt-2"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>

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
      </div>
    </div>
  );
}
