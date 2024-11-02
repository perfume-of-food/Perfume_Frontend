import { useMoodStore } from "@/stores/useMoodStore";
import { grayscaleMoodList } from "@/constants/moods";

export function MoodPanel() {
  const { selectedMood, setSelectedMood } = useMoodStore();

  const centerX = 50;
  const centerY = 50;
  const radius = 35;
  const totalPoints = 24;
  const textOffset = 5; // 文本距离点的偏移量

  // 生成圆上的点
  const points = Array.from({ length: totalPoints }, (_, index) => {
    // 从 -90 度（正上方）开始，顺时针旋转
    // -90 度 = -π/2 弧度
    const angle = (-Math.PI / 2) + (index * 2 * Math.PI) / totalPoints;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    // 计算文本位置，在点的外侧
    const textX = centerX + (radius + textOffset) * Math.cos(angle);
    const textY = centerY + (radius + textOffset) * Math.sin(angle);
    return { x, y, textX, textY, angle };
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

          {/* 绘制24个点和文本 */}
          {points.map((point, index) => {
            // 将弧度转换为角度，并标准化到 -180 到 180 度之间
            const degrees = (point.angle * 180) / Math.PI;
            // 确定文本锚点位置
            const textAnchor =
              degrees === 90 || degrees === -90
                ? "middle"
                : degrees > 90 && degrees < 270
                ? "end"
                : "start";

            return (
              <g key={index}>
                <circle
                  className="cursor-pointer transition-colors duration-200"
                  cx={point.x}
                  cy={point.y}
                  r="1"
                  fill={
                    selectedMood === grayscaleMoodList[index].name
                      ? "#FEA237"
                      : grayscaleMoodList[index].color
                  }
                  onClick={() => setSelectedMood(grayscaleMoodList[index].name)}
                />
                <text
                  className="font-dot cursor-pointer transition-colors duration-200"
                  x={point.textX}
                  y={point.textY}
                  fill={
                    selectedMood === grayscaleMoodList[index].name
                      ? "#FEA237"
                      : "#000000"
                  }
                  fontSize={
                    selectedMood === grayscaleMoodList[index].name
                      ? "4"
                      : "3.3"
                  }
                  textAnchor={textAnchor}
                  dominantBaseline="middle"
                  onClick={() => setSelectedMood(grayscaleMoodList[index].name)}
                >
                  {grayscaleMoodList[index].name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
