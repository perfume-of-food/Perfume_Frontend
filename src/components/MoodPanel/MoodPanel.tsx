export function MoodPanel() {
  const centerX = 50;
  const centerY = 50;
  const radius = 35;
  const totalPoints = 24;
  const textOffset = 3; // 文本距离点的偏移量

  // 生成圆上的点
  const points = Array.from({ length: totalPoints }, (_, index) => {
    const angle = (index * 2 * Math.PI) / totalPoints;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    // 计算文本位置，在点的外侧
    const textX = centerX + (radius + textOffset) * Math.cos(angle);
    const textY = centerY + (radius + textOffset) * Math.sin(angle);
    return { x, y, textX, textY, angle };
  });

  const moodList = [
    { id: 1, name: "Ecstatic", color: "#FF0000" }, // 最强烈的快乐
    { id: 2, name: "Excited", color: "#FF3300" }, // 兴奋
    { id: 3, name: "Happy", color: "#FF6600" }, // 快乐
    { id: 4, name: "Pleasant", color: "#FF9900" }, // 愉悦
    { id: 5, name: "Relaxed", color: "#FFCC00" }, // 放松
    { id: 6, name: "Calm", color: "#FFFF00" }, // 平静
    { id: 7, name: "Content", color: "#CCFF00" }, // 满足
    { id: 8, name: "Peaceful", color: "#99FF00" }, // 安详
    { id: 9, name: "Bored", color: "#66FF00" }, // 无聊
    { id: 10, name: "Tired", color: "#33FF00" }, // 疲倦
    { id: 11, name: "Confused", color: "#00FF00" }, // 困惑
    { id: 12, name: "Worried", color: "#00FF33" }, // 担忧
    { id: 13, name: "Anxious", color: "#00FF66" }, // 焦虑
    { id: 14, name: "Nervous", color: "#00FF99" }, // 紧张
    { id: 15, name: "Scared", color: "#00FFCC" }, // 害怕
    { id: 16, name: "Fearful", color: "#00FFFF" }, // 恐惧
    { id: 17, name: "Depressed", color: "#00CCFF" }, // 沮丧
    { id: 18, name: "Sad", color: "#0099FF" }, // 悲伤
    { id: 19, name: "Suffering", color: "#0066FF" }, // 痛苦
    { id: 20, name: "Angry", color: "#0033FF" }, // 愤怒
    { id: 21, name: "Furious", color: "#0000FF" }, // 暴怒
    { id: 22, name: "Disgusted", color: "#3300FF" }, // 厌恶
    { id: 23, name: "Ashamed", color: "#6600FF" }, // 羞愧
    { id: 24, name: "Guilty", color: "#9900FF" }, // 内疚
  ];

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
              degrees === 90 || degrees === 270
                ? "middle"
                : degrees > 90 && degrees < 270
                ? "end"
                : "start";

            return (
              <g key={index}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="1"
                  fill={moodList[index].color}
                />
                <text
                  x={point.textX}
                  y={point.textY}
                  fontSize="2"
                  textAnchor={textAnchor}
                  dominantBaseline="middle"
                  fill={moodList[index].color}
                >
                  {moodList[index].name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
