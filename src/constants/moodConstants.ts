import { Mood } from "@/types/Mood";

export interface MoodItem {
  id: number;
  name: Mood;
  color: string;
  desc: string;
  x: number;
  y: number;
}

const color = "#808080";

export const grayscaleMoodList: MoodItem[] = [
  { id: 1, name: Mood.AMAZEMENT, color, desc: "驚きに似ているが、衝撃や信じ難さを含む場合がある", x: 0, y: 50 },
  { id: 2, name: Mood.SURPRISE, color, desc: "意外や予想外のことに対する感情で、強い好奇心を伴うことが多い", x: 12.94, y: 48.30 },
  { id: 3, name: Mood.EXCITEMENT, color, desc: "喜びや活力が表れ、何かポジティブな出来事への期待を伴う", x: 25.00, y: 43.30 },
  { id: 4, name: Mood.JOY, color, desc: "何かの出来事や達成感で、嬉しい気持ちに満たされる感情", x: 35.36, y: 35.36 },
  { id: 5, name: Mood.SATISFACTION, color, desc: "ある結果や状況に満足し、嬉しさを感じる", x: 43.30, y: 25.00 },
  { id: 6, name: Mood.HAPPINESS, color, desc: "何かが成功したり、うまく進んだことで感じる喜び", x: 48.30, y: 12.94 },
  { id: 7, name: Mood.BLESSED, color, desc: "持続的で広範囲な喜びや幸福感、常に満足感を伴う", x: 50, y: 0 },
  { id: 8, name: Mood.RELIEF, color, desc: "快適で、ストレスのない、落ち着いた状態", x: 48.30, y: -12.94 },
  { id: 9, name: Mood.FULFILLMENT, color, desc: "欲求や期待が満たされ、心地よさを伴う感情", x: 43.30, y: -25.00 },
  { id: 10, name: Mood.RELAXED, color, desc: "身も心もリラックスし、安らぎな状態", x: 35.36, y: -35.36 },
  { id: 11, name: Mood.PEACEFUL, color, desc: "心の奥深くにある静かで穏やかな感情", x: 25.00, y: -43.30 },
  { id: 12, name: Mood.CALM, color, desc: "心が安らかで、感情の波立ちがない状態", x: 12.94, y: -48.30 },
  { id: 13, name: Mood.DAZED, color, desc: "静かで波立たない、緩やかな気持ち", x: 0, y: -50 },
  { id: 14, name: Mood.BORED, color, desc: "周囲の環境や状況に興味を感じられず、退屈に思う状態", x: -12.94, y: -48.30 },
  { id: 15, name: Mood.TIRED, color, desc: "心身が疲れ、活力に欠ける状態", x: -25.00, y: -43.30 },
  { id: 16, name: Mood.SLUGGISH, color, desc: "無気力で、体や心のエネルギーが低下している状態", x: -35.36, y: -35.36 },
  { id: 17, name: Mood.SAD, color, desc: "望ましくない状況に対する痛みや悲しみ", x: -43.30, y: -25.00 },
  { id: 18, name: Mood.DEPRESSED, color, desc: "ひどく落ち込んでいて、悲しみや絶望を感じる気持ち", x: -48.30, y: -12.94 },
  { id: 19, name: Mood.MISERABLE, color, desc: "極度の苦しみを伴う感情で、無力感や絶望感を感じる", x: -50, y: 0 },
  { id: 20, name: Mood.DISAPPOINTED, color, desc: "目標に届かない無力感や挫折感", x: -48.30, y: 12.94 },
  { id: 21, name: Mood.IRRITATED, color, desc: "何かが煩わしく、不快感や苛立ちを感じる", x: -43.30, y: 25.00 },
  { id: 22, name: Mood.FEAR, color, desc: "危険や不安なことが起こると予感し、恐れを抱く", x: -35.36, y: 35.36 },
  { id: 23, name: Mood.NERVOUS, color, desc: "プレッシャーや緊張により、情緒が張り詰めた不安定な状態", x: -25.00, y: 43.30 },
  { id: 24, name: Mood.ANGRY, color, desc: "何かの行為や状況に強い怒りや敵意を感じる", x: -12.94, y: 48.30 }
];