import React, { useState } from "react";

interface InputPanelProps {
  onClose: () => void;
  onConfirm: (value: string) => void;
}

export const ReasonInputPanel = ({ onClose, onConfirm }: InputPanelProps) => {
  const [reason, setReason] = useState("");

  const [isJumping, setIsJumping] = useState(false);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "confirm-panel-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="confirm-panel-overlay"
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div className="relative w-[735px] h-[660px] translate-y-[-15%] bg-transparent">
        {/* 八边形背景 */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 735 660"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 76.5543L29.0808 0.5H705.919L734.5 76.5542V583.446L705.919 659.5H29.0808L0.5 583.446V76.5543Z"
            fill="black"
            fillOpacity="0.9"
            stroke="#FEA237"
          />
        </svg>

        {/* 右上角的叉 */}
        <div
          className="absolute top-8 right-12 z-20 cursor-pointer"
          onClick={onClose}
        >
          {" "}
          {/* Adjusted right position */}
          <svg
            width="48"
            height="52"
            viewBox="0 0 48 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.488662"
              y="0.488662"
              width="47.0227"
              height="50.8409"
              fill="black"
              fillOpacity="0.2"
              stroke="#F0F0F0"
              strokeWidth="0.977324"
            />
            <path
              d="M9.00684 10.6484L39.2796 40.9212"
              stroke="white"
              strokeWidth="0.977324"
            />
            <path
              d="M39.2788 10.6484L9.00608 40.9212"
              stroke="white"
              strokeWidth="0.977324"
            />
          </svg>
        </div>

        {/*  顶上居中的"入力“，装饰用 */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
          <div className="relative w-[20vh] h-[7vh] flex items-center justify-center">
            <svg
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 247 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.18924 5.38553L9.86979 0.5H237.13L246.5 10.2801V76.7199L241.811 81.6145L237.13 86.5H9.86979L5.18924 81.6145L0.5 76.7199V10.2801L5.18924 5.38553Z"
                fill="#FEA237"
                fillOpacity="0.2"
                stroke="#FEA237"
              />
            </svg>
            <span className="text-white text-4xl font-dot font-medium text-center [-webkit-text-stroke:_0.6px_#FEA237;] [paint-order:stroke fill] z-10">
              入力
            </span>
          </div>
        </div>

        <div className="absolute flex flex-col items-center justify-center w-full h-full gap-8 pt-20">
          <span
            className="text-beige text-[1.8rem] font-dot w-[73%] text-left"
            style={{
              animation: isJumping ? "jumpUp 300ms ease-in-out" : "none",
            }}
          >
            この料理を選んだ理由を書いてください:
          </span>
          <div className="relative w-[75%] h-[50%]">
            <svg
              className="w-full h-full"
              style={{
                animation: isJumping ? "jumpUp 300ms ease-in-out" : "none",
              }}
              preserveAspectRatio="none"
              viewBox="0 0 247 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.18924 5.38553L9.86979 0.5H237.13L246.5 10.2801V76.7199L241.811 81.6145L237.13 86.5H9.86979L5.18924 81.6145L0.5 76.7199V10.2801L5.18924 5.38553Z"
                fill="#FFECD7"
                fillOpacity="0.2"
                stroke="#FEA237"
              />
            </svg>
            <textarea
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[80%] bg-white bg-opacity-0 text-beige font-dot text-3xl outline-none caret-orange"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
          <div className="w-[150px] h-[80px]">
            <div
              className="flex w-full h-full justify-center items-center relative "
              onClick={() => {
                if (!reason.trim()) {
                  setIsJumping(true);
                  setTimeout(() => setIsJumping(false), 300); // 动画结束后重置状态
                  return;
                }
                onConfirm(reason);
              }}
            >
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 247 87"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.18924 5.38553L9.86979 0.5H237.13L246.5 10.2801V76.7199L241.811 81.6145L237.13 86.5H9.86979L5.18924 81.6145L0.5 76.7199V10.2801L5.18924 5.38553Z"
                  fill="#FEA237"
                  className="[fillOpacity:0.2] [stroke-opacity:1] active:[fillOpacity:0.5]"
                  stroke="#FEA237"
                />
              </svg>
              <span className="text-white text-4xl font-dot font-medium inline-block absolute text-center [-webkit-text-stroke:_2px_#FEA237;] [paint-order:stroke_fill] pointer-events-none">
                決めた
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
