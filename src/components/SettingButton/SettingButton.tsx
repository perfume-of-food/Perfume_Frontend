export const SettingButton = () => {
  return (
    <div
      className="flex w-full h-full justify-center items-center p-[2px] relative"
      onClick={() => window.location.href = '/'}
    >
      <svg
        className="w-full h-full"
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
      <span className="text-white text-3xl font-serif w-1/3 inline-block absolute  [text-align-last:justify] [-webkit-text-stroke:_2px_#FEA237;]  [paint-order:stroke_fill] pointer-events-none">
        HOME
      </span>
    </div>
  );
};
