interface GreetingChoiceButtonProps {
  onClick: () => void;
}

export const GreetingChoiceButton = ({
  onClick,
}: GreetingChoiceButtonProps) => {
  return (
    <div className="flex flex-col w-full h-full justify-around items-center p-[2px] relative">
      <div
        className="w-[70%] h-[30%] flex justify-center items-center relative "
        onClick={onClick}
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
            className="[fillOpacity:0.2] active:[fillOpacity:0.5]"
            stroke="#FEA237"
          />
        </svg>

        <span className="text-white text-4xl font-dot inline-block absolute text-center [-webkit-text-stroke:_2px_#FEA237;] [paint-order:stroke_fill] pointer-events-none">
          1にする
        </span>
      </div>
      <div
        className="w-[70%] h-[30%] flex justify-center items-center relative "
        onClick={onClick}
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
            className="[fillOpacity:0.2] active:[fillOpacity:0.5]"
            stroke="#FEA237"
          />
        </svg>
        <span className="text-white text-4xl font-dot inline-block absolute text-center [-webkit-text-stroke:_2px_#FEA237;] [paint-order:stroke_fill] pointer-events-none">
          2にする
        </span>
      </div>
    </div>
  );
};
