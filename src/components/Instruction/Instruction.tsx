import React from "react";

interface InstructionProps {
  title: string | null;
  onClose: () => void;
}

export const Instruction = ({ onClose }: InstructionProps) => {
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
      <div className="relative w-[735px] h-[660px] bg-transparent">
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

        {/*  顶上居中的"確認“，装饰用 */}
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
              使用説明
            </span>
          </div>
        </div>

        {/* 中间的文字 */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <div className="flex flex-col gap-4 pt-2 px-6 text-[#FFEFD0] font-dot text-2xl text-left leading-loose">
            <span>
              本作品の嗅覚表現は、一部の方に不快感を引き起こす可能性がありますので、ご自身の状況に応じて体験を続けるか判断してください。
            </span>
            <span>
              作品で使用されている食品香料には、アレルギー反応を引き起こす可能性がありますので、ご自身の状況に応じて体験を続けるか判断してください。
            </span>
            <span>
              本作品にはアルコールやタバコに関する嗅覚表現がありますが、20歳未満の方は飲酒や喫煙を控えてください。
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
