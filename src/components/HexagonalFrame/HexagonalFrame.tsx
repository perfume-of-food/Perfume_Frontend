interface HexagonalFrameProps {
  interactive?: boolean;
}

export const HexagonalFrame = ({
  interactive = false,
}: HexagonalFrameProps) => {
  return (
    <svg
      className="w-full h-full"
      preserveAspectRatio="none"
      viewBox="0 0 247 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {interactive ? (
        <path
          className=" [fillOpacity:0.2] active:[fillOpacity:0.5]"
          d="M5.18924 5.38553L9.86979 0.5H237.13L246.5 10.2801V76.7199L241.811 81.6145L237.13 86.5H9.86979L5.18924 81.6145L0.5 76.7199V10.2801L5.18924 5.38553Z"
          fill="#FEA237"
          stroke="#FEA237"
          vector-effect="non-scaling-stroke"
        />
      ) : (
        <path
          className="[fillOpacity:0.9]"
          d="M5.18924 5.38553L9.86979 0.5H237.13L246.5 10.2801V76.7199L241.811 81.6145L237.13 86.5H9.86979L5.18924 81.6145L0.5 76.7199V10.2801L5.18924 5.38553Z"
          fill="black"
          stroke="#FEA237"
          vector-effect="non-scaling-stroke"
        />
      )}
    </svg>
  );
};
