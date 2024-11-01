import { useState, useMemo } from "react";

export const Slider = ({ min = 0, max = 100, defaultValue = 50 }) => {
  const [value, setValue] = useState(defaultValue);

  // 计算两侧光晕强度
  const glowIntensities = useMemo(() => {
    const leftPercentage = (max - value) / (max - min);
    const rightPercentage = (value - min) / (max - min);

    // 将发光强度转换为0-20px范围
    const leftGlow = Math.round(leftPercentage * 20);
    const rightGlow = Math.round(rightPercentage * 20);

    return { left: leftGlow, right: rightGlow };
  }, [value, min, max]);

  return (
    <div
      className="w-full max-w-md mx-auto p-4"
      style={{ background: "black" }}
    >
      <div className="relative pt-8">
        {/* 左侧标签和圆点 */}
        <div
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            width: "24px",
            height: "24px",
            background: "#FEA237",
            borderRadius: "50%",
            boxShadow: `0 0 ${glowIntensities.left}px #FEA237`,
            transition: "box-shadow 0.3s ease",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            left: "0",
            top: "-24px",
            fontSize: "14px",
            color: "white",
          }}
        >
          かなしい
        </div>

        {/* 右侧标签和圆点 */}
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            width: "24px",
            height: "24px",
            background: "#FEA237",
            borderRadius: "50%",
            boxShadow: `0 0 ${glowIntensities.right}px #FEA237`,
            transition: "box-shadow 0.3s ease",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "-24px",
            fontSize: "14px",
            color: "white",
          }}
        >
          うれしい
        </div>

        <style>{`
          input[type="range"] {
            -webkit-appearance: none;
            width: 100%;
            height: 16px;
            background: rgba(254, 162, 55, 0.2);
            border: 2px solid #FEA237;
            border-radius: 9999px;
            outline: none;
            position: relative;
          }

          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
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
            margin-top: -4px;
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

          input[type="range"]::-webkit-slider-runnable-track {
            -webkit-appearance: none;
            height: 16px;
            border-radius: 9999px;
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
          value={value}
          onChange={(e) => {
            const newValue = parseInt(e.target.value);
            setValue(newValue);
          }}
          className="w-full"
        />

        <div className="mt-4 text-center">
          <span className="text-xl font-semibold text-[#FEA237]">{value}</span>
        </div>
      </div>
    </div>
  );
};
