import { useMoodStore } from "@/stores/useMoodStore";
import { grayscaleMoodList } from "@/constants/moodConstants";

export function MoodPanel() {
  const { selectedMood, setSelectedMood } = useMoodStore();

  const viewBoxSize = 100; // 控制 viewBox 的边长
  const centerX = viewBoxSize / 2;
  const centerY = viewBoxSize / 2;
  const radius = viewBoxSize * 0.35; // 35% of viewBoxSize
  const axisLabelRadiusX = radius * 0.6; // 水平方向的偏移量
  const axisLabelRadiusY = radius * 0.7; // 垂直方向的偏移量
  const totalPoints = 24;
  const textOffset = 5;
  const lineMargin = viewBoxSize * 0.15; // 15% of viewBoxSize for line margins

  // 生成圆上的点
  const points = Array.from({ length: totalPoints }, (_, index) => {
    // 从 -90 度（正上方）开始，顺时针旋转
    // -90 度 = -π/2 弧度
    const angle = -Math.PI / 2 + (index * 2 * Math.PI) / totalPoints;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    // 计算文本位置，在点的外侧
    const textX = centerX + (radius + textOffset) * Math.cos(angle);
    const textY = centerY + (radius + textOffset) * Math.sin(angle);
    return { x, y, textX, textY, angle };
  });

  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <div className="w-[900px] h-[800px]">
        <svg
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full"
        >
          {/* 绘制水平线，经过圆心 */}
          <line
            x1={lineMargin}
            y1={centerY}
            x2={viewBoxSize - lineMargin}
            y2={centerY}
            stroke="black"
            strokeWidth="0.5"
          />

          {/* 绘制垂直线，经过圆心 */}
          <line
            x1={centerX}
            y1={lineMargin}
            x2={centerX}
            y2={viewBoxSize - lineMargin}
            stroke="black"
            strokeWidth="0.5"
          />

          {/* 添加坐标轴标签 */}
          <g>
            <text
              x={centerX}
              y={centerY - axisLabelRadiusY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-dot"
              fontSize="3"
              stroke="white"
              strokeWidth="3"
              paintOrder="stroke"
            >
              はげしい
            </text>
          </g>
          <g>
            <text
              x={centerX + axisLabelRadiusX}
              y={centerY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-dot"
              fontSize="3"
              stroke="white"
              strokeWidth="3"
              paintOrder="stroke"
            >
              うれしい
            </text>
          </g>
          <g>
            <text
              x={centerX}
              y={centerY + axisLabelRadiusY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-dot"
              fontSize="3"
              stroke="white"
              strokeWidth="3"
              paintOrder="stroke"
            >
              かなしい
            </text>
          </g>
          <g>
            <text
              x={centerX - axisLabelRadiusX}
              y={centerY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-dot"
              fontSize="3"
              stroke="white"
              strokeWidth="3"
              paintOrder="stroke"
            >
              へいたん
            </text>
          </g>

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

            const selected = selectedMood === grayscaleMoodList[index].name;

            return (
              <g key={index}>
                <circle
                  className="cursor-pointer transition-all duration-200"
                  cx={point.x}
                  cy={point.y}
                  r="1"
                  fill={selected ? "#FEA237" : grayscaleMoodList[index].color}
                  onClick={() => setSelectedMood(grayscaleMoodList[index].name)}
                />
                <text
                  className="font-dot cursor-pointer transition-all duration-200"
                  x={point.textX}
                  y={point.textY}
                  fill={selected ? "#FEA237" : "#000000"}
                  fontSize={selected ? "4" : "3.3"}
                  fontWeight={selected ? "bold" : "normal"}
                  textAnchor={textAnchor}
                  dominantBaseline="middle"
                  strokeWidth="0.05"
                  stroke={selected ? "#FEA237" : "#000000"}
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
