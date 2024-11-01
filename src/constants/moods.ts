export interface Mood {
  id: number;
  name: string;
  color: string;
}

const onAxisColor = "#000000";
const offAxisColor = "#808080";

export const grayscaleMoodList: Mood[] = [
  { id: 1, name: "Ecstatic", color: onAxisColor }, // 最强烈的快乐
  { id: 2, name: "Excited", color: offAxisColor }, // 兴奋
  { id: 3, name: "Happy", color: offAxisColor }, // 快乐
  { id: 4, name: "Pleasant", color: offAxisColor }, // 愉悦
  { id: 5, name: "Relaxed", color: offAxisColor }, // 放松
  { id: 6, name: "Calm", color: offAxisColor }, // 平静
  { id: 7, name: "Content", color: onAxisColor }, // 满足
  { id: 8, name: "Peaceful", color: offAxisColor }, // 安详
  { id: 9, name: "Bored", color: offAxisColor }, // 无聊
  { id: 10, name: "Tired", color: offAxisColor }, // 疲倦
  { id: 11, name: "Confused", color: offAxisColor }, // 困惑
  { id: 12, name: "Worried", color: offAxisColor }, // 担忧
  { id: 13, name: "Anxious", color: onAxisColor }, // 焦虑
  { id: 14, name: "Nervous", color: offAxisColor }, // 紧张
  { id: 15, name: "Scared", color: offAxisColor }, // 害怕
  { id: 16, name: "Fearful", color: offAxisColor }, // 恐惧
  { id: 17, name: "Depressed", color: offAxisColor }, // 沮丧
  { id: 18, name: "Suffering", color: offAxisColor }, // 痛苦
  { id: 19, name: "Sad", color: onAxisColor }, // 悲伤
  { id: 20, name: "Angry", color: offAxisColor }, // 愤怒
  { id: 21, name: "Furious", color: offAxisColor }, // 暴怒
  { id: 22, name: "Disgusted", color: offAxisColor }, // 厌恶
  { id: 23, name: "Ashamed", color: offAxisColor }, // 羞愧
  { id: 24, name: "Guilty", color: offAxisColor }, // 内疚
];

// const chromaMoodList: Mood[] = [
//   { id: 1, name: "Ecstatic", color: "#FF0000" }, // 最强烈的快乐
//   { id: 2, name: "Excited", color: "#FF3300" }, // 兴奋
//   { id: 3, name: "Happy", color: "#FF6600" }, // 快乐
//   { id: 4, name: "Pleasant", color: "#FF9900" }, // 愉悦
//   { id: 5, name: "Relaxed", color: "#FFCC00" }, // 放松
//   { id: 6, name: "Calm", color: "#FFFF00" }, // 平静
//   { id: 7, name: "Content", color: "#CCFF00" }, // 满足
//   { id: 8, name: "Peaceful", color: "#99FF00" }, // 安详
//   { id: 9, name: "Bored", color: "#66FF00" }, // 无聊
//   { id: 10, name: "Tired", color: "#33FF00" }, // 疲倦
//   { id: 11, name: "Confused", color: "#00FF00" }, // 困惑
//   { id: 12, name: "Worried", color: "#00FF33" }, // 担忧
//   { id: 13, name: "Anxious", color: "#00FF66" }, // 焦虑
//   { id: 14, name: "Nervous", color: "#00FF99" }, // 紧张
//   { id: 15, name: "Scared", color: "#00FFCC" }, // 害怕
//   { id: 16, name: "Fearful", color: "#00FFFF" }, // 恐惧
//   { id: 17, name: "Depressed", color: "#00CCFF" }, // 沮丧
//   { id: 18, name: "Sad", color: "#0099FF" }, // 悲伤
//   { id: 19, name: "Suffering", color: "#0066FF" }, // 痛苦
//   { id: 20, name: "Angry", color: "#0033FF" }, // 愤怒
//   { id: 21, name: "Furious", color: "#0000FF" }, // 暴怒
//   { id: 22, name: "Disgusted", color: "#3300FF" }, // 厌恶
//   { id: 23, name: "Ashamed", color: "#6600FF" }, // 羞愧
//   { id: 24, name: "Guilty", color: "#9900FF" }, // 内疚
// ];
