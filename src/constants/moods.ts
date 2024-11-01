export interface Mood {
  id: number;
  name: string;
  color: string;
  desc?: string;
}

const onAxisColor = "#000000";
const offAxisColor = "#808080";

export const grayscaleMoodList: Mood[] = [
  { id: 1, name: "Ecstatic", color: onAxisColor, desc: "[Ecstatic]: 強い喜びと歓喜を感じている" },
  { id: 2, name: "Excited", color: offAxisColor, desc: "[Excited]: 熱狂的で意欲的な気持ち" },
  { id: 3, name: "Happy", color: offAxisColor, desc: "[Happy]: 喜びと満足感を感じている" },
  { id: 4, name: "Pleasant", color: offAxisColor, desc: "[Pleasant]: 幸せな満足感や楽しみを与える" },
  { id: 5, name: "Relaxed", color: offAxisColor, desc: "[Relaxed]: 緊張や不安から解放されている" },
  { id: 6, name: "Calm", color: offAxisColor, desc: "[Calm]: 穏やかで落ち着いている" },
  { id: 7, name: "Content", color: onAxisColor, desc: "[Content]: 穏やかな幸せを感じている" },
  { id: 8, name: "Peaceful", color: offAxisColor, desc: "[Peaceful]: 心が静かで穏やか" },
  { id: 9, name: "Bored", color: offAxisColor, desc: "[Bored]: 退屈で興味を失っている" },
  { id: 10, name: "Tired", color: offAxisColor, desc: "[Tired]: 休息や睡眠が必要な状態" },
  { id: 11, name: "Confused", color: offAxisColor, desc: "[Confused]: 明確に考えたり理解したりできない" },
  { id: 12, name: "Worried", color: offAxisColor, desc: "[Worried]: 問題や不確実なことに不安を感じている" },
  { id: 13, name: "Anxious", color: onAxisColor, desc: "[Anxious]: 心配や不安を感じている" },
  { id: 14, name: "Nervous", color: offAxisColor, desc: "[Nervous]: 緊張しやすく神経質になっている" },
  { id: 15, name: "Scared", color: offAxisColor, desc: "[Scared]: 恐れや怖さを感じている" },
  { id: 16, name: "Fearful", color: offAxisColor, desc: "[Fearful]: 恐怖を感じたり示したりしている" },
  { id: 17, name: "Depressed", color: offAxisColor, desc: "[Depressed]: 全般的な不幸せな状態にある" },
  { id: 18, name: "Suffering", color: offAxisColor, desc: "[Suffering]: 痛みや苦しみを経験している" },
  { id: 19, name: "Sad", color: onAxisColor, desc: "[Sad]: 悲しみを感じたり表したりしている" },
  { id: 20, name: "Angry", color: offAxisColor, desc: "[Angry]: 強い怒りや苛立ちを感じている" },
  { id: 21, name: "Furious", color: offAxisColor, desc: "[Furious]: 激怒している状態" },
  { id: 22, name: "Disgusted", color: offAxisColor, desc: "[Disgusted]: 嫌悪感や強い不承認を感じている" },
  { id: 23, name: "Ashamed", color: offAxisColor, desc: "[Ashamed]: 恥ずかしさや罪悪感を感じている" },
  { id: 24, name: "Guilty", color: offAxisColor, desc: "[Guilty]: 自分の過ちに責任を感じている" },
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
