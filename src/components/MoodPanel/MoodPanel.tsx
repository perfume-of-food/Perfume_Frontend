export function MoodPanel() {
  const centerX = 50;
  const centerY = 50;
  const radius = 35; // 60% of 50 (half of viewBox)
  const totalPoints = 24;

  // 生成圆上的点
  const points = Array.from({ length: totalPoints }, (_, index) => {
    const angle = (index * 2 * Math.PI) / totalPoints;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  });

  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <div className="w-[800px] h-[800px]">
        <svg 
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full"
        >
          
          {/* 绘制水平线，经过圆心 */}
          <line
            x1="15"
            y1={centerY}
            x2="85"
            y2={centerY}
            stroke="black"
            strokeWidth="0.5"
          />
          
          {/* 绘制垂直线，经过圆心 */}
          <line
            x1={centerX}
            y1="15"
            x2={centerX}
            y2="85"
            stroke="black"
            strokeWidth="0.5"
          />

          {/* 绘制24个点 */}
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="1"
              fill="black"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};
