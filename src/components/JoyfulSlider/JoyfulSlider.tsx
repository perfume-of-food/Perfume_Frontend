import { useMemo } from "react";
import joyful from "@/assets/joyful.png";
import sad from "@/assets/sad.png";
import { useIntroStore } from "@/stores/useIntroStore";

export const JoyfulSlider = ({ min = -50, max = 50 }) => {
  const { joyfulValue, setJoyfulValue } = useIntroStore();

  // 计算两侧光晕强度
  const glowIntensities = useMemo(() => {
    const leftPercentage = (max - joyfulValue) / (max - min);
    const rightPercentage = (joyfulValue - min) / (max - min);

    // 将发光强度转换为0-20px范围
    const leftGlow = Math.round(leftPercentage * 30);
    const rightGlow = Math.round(rightPercentage * 30);

    return { left: leftGlow, right: rightGlow };
  }, [joyfulValue, min, max]);

  return (
    <div className="relative flex flex-col items-center justify-around w-full h-full  px-[7.5%] py-[5%] ">
      <div className="flex w-full items-center justify-between ">
        {/* 左侧标签和圆点 */}
        <div className="flex flex-col items-center">
          <div className="pb-4 font-dot text-3xl text-beige">かなしい</div>
          <div
            className="w-16 h-16 bg-orange rounded-full"
            style={{
              boxShadow: `0 0 ${glowIntensities.left}px #FEA237`,
            }}
          >
            <img src={sad} alt="sad" />
          </div>
        </div>
        {/* 右侧标签和圆点 */}
        <div className="flex flex-col items-center">
          <div className="pb-4 font-dot text-3xl text-beige">うれしい</div>
          <div
            className=" w-16 h-16 rounded-full bg-orange"
            style={{
              boxShadow: `0 0 ${glowIntensities.right}px #FEA237`,
            }}
          >
            <img src={joyful} alt="joyful" />
          </div>
        </div>
      </div>

      <style>{`
          input[type="range"] {
            -webkit-appearance: none;
            width: 100%;
            height:34px;
            background: rgba(254, 162, 55, 0.2);
            border: 2px solid #FEA237;
            border-radius: 9999px;
            outline: none;
            position: relative;
          }

          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 40px;
            height: 70px;
            background: #FEA237;
            background-image: 
              linear-gradient(#DA8A30, #DA8A30),
              linear-gradient(#DA8A30, #DA8A30),
              linear-gradient(#DA8A30, #DA8A30);
            background-repeat: no-repeat;
            background-size: 
              20px 3px,
              20px 3px,
              20px 3px;
            background-position: 
              center 20px,
              center 33px,
              center 46px;
            border-radius: 10px;
            cursor: pointer;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          }

          input[type="range"]::-moz-range-thumb {
            width: 24px;
            height: 24px;
            background: #FEA237;
            background-image: 
              linear-gradient(#DA8A30, #DA8A30),
              linear-gradient(#DA8A30, #DA8A30),
              linear-gradient(#DA8A30, #DA8A30);
            background-repeat: no-repeat;
            background-size: 
              12px 2px,
              12px 2px,
              12px 2px;
            background-position: 
              center 6px,
              center 11px,
              center 16px;
            border-radius: 6px;
            cursor: pointer;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
            border: none;
            margin-top: -4px;
          }

          input[type="range"]::-moz-range-track {
            height: 16px;
            border-radius: 9999px;
          }
        `}</style>

      <input
        type="range"
        min={min}
        max={max}
        value={joyfulValue}
        onChange={(e) => {
          const newValue = parseInt(e.target.value);
          setJoyfulValue(newValue);
        }}
        className="w-full"
      />
    </div>
  );
};
