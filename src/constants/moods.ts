export interface Mood {
  id: number;
  name: string;
  color: string;
  desc?: string;
}

const onAxisColor = "#808080";
const offAxisColor = "#808080";

export const grayscaleMoodList: Mood[] = [
  { id: 1, name: "驚愕", color: onAxisColor, desc: "驚きに似ているが、衝撃や信じ難さを含む場合がある" },
  { id: 2, name: "サプライズ", color: offAxisColor, desc: "意外や予想外のことに対する感情で、強い好奇心を伴うことが多い" },
  { id: 3, name: "ワクワク", color: offAxisColor, desc: "喜びや活力が表れ、何かポジティブな出来事への期待を伴う" },
  { id: 4, name: "喜び", color: offAxisColor, desc: "何かの出来事や達成感で、嬉しい気持ちに満たされる感情" },
  { id: 5, name: "満足", color: offAxisColor, desc: "ある結果や状況に満足し、嬉しさを感じる" },
  { id: 6, name: "嬉しい", color: offAxisColor, desc: "何かが成功したり、うまく進んだことで感じる喜び" },
  { id: 7, name: "幸せ", color: onAxisColor, desc: "持続的で広範囲な喜びや幸福感、常に満足感を伴う" },
  { id: 8, name: "安心", color: offAxisColor, desc: "快適で、ストレスのない、落ち着いた状態" },
  { id: 9, name: "充実感", color: offAxisColor, desc: "欲求や期待が満たされ、心地よさを伴う感情" },
  { id: 10, name: "リラックス", color: offAxisColor, desc: "身も心もリラックスし、安らぎな状態" },
  { id: 11, name: "穏やか", color: offAxisColor, desc: "心の奥深くにある静かで穏やかな感情" },
  { id: 12, name: "冷静", color: offAxisColor, desc: "心が安らかで、感情の波立ちがない状態" },
  { id: 13, name: "ぼんやり", color: onAxisColor, desc: "静かで波立たない、緩やかな気持ち" },
  { id: 14, name: "退屈", color: offAxisColor, desc: "周囲の環境や状況に興味を感じられず、退屈に思う状態" },
  { id: 15, name: "疲れた", color: offAxisColor, desc: "心身が疲れ、活力に欠ける状態" },
  { id: 16, name: "だるい", color: offAxisColor, desc: "無気力で、体や心のエネルギーが低下している状態" },
  { id: 17, name: "悲しい", color: offAxisColor, desc: "望ましくない状況に対する痛みや悲しみ" },
  { id: 18, name: "憂鬱", color: offAxisColor, desc: "ひどく落ち込んでいて、悲しみや絶望を感じる気持ち" },
  { id: 19, name: "惨め", color: onAxisColor, desc: "極度の苦しみを伴う感情で、無力感や絶望感を感じる" },
  { id: 20, name: "がっかり", color: offAxisColor, desc: "目標に届かない無力感や挫折感" },
  { id: 21, name: "いらいら", color: offAxisColor, desc: "何かが煩わしく、不快感や苛立ちを感じる" },
  { id: 22, name: "恐怖", color: offAxisColor, desc: "危険や不安なことが起こると予感し、恐れを抱く" },
  { id: 23, name: "緊張", color: offAxisColor, desc: "プレッシャーや緊張により、情緒が張り詰めた不安定な状態" },
  { id: 24, name: "怒り", color: offAxisColor, desc: "何かの行為や状況に強い怒りや敵意を感じる" },
];