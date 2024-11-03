import { Step } from "@/types/Step";

export const introConversation = [
  "やっと来てくれた。",
  "ようこそ……ずっと君を待っていたんだ。",
  "ここは「心の味わい」というレストランで、みんなはよく私のことを『店長』って呼んでいる。",
  "私は昔から人間の複雑な感情に興味を持っていて、この場所を作ったんだ。",
  "このレストランは、普通とは違って、ここの料理は実体ではなく、君の感情が食べ物の香りとして表れるんだ……",
  "さあ、これから君の感情の旅を案内するよ。心の準備はできているかい？",
  "まず君の名前を教えてくれるかな？",
  "さて、{userName}さん、最近の君はどんな気持ちで過ごしているかを教えて欲しい。あるいは、過去の心に残る瞬間を思い出してもいいよ。",
  "たとえば、誰かと過ごした幸せな時間、激しい喧嘩の時の怒り、あるいは静かな雨の夜に感じた寂しさなど……",
  "目を閉じて、静かに感じてみて。",
  "どうだい？感情をそのまま言葉にするのは難しいかもしれないから、まずは感情の二つの基本的な性質から探ってみよう。",
  "スライダーをドラッグして、君の感情が『うれしい』と『かなしい』の間でどちらに近いか、感情の性質を考えてみよう。",
  "スライダーをドラッグして、君の感情が『はげしい』と『へいたん』の間でどちらに近いか、感情の強さを探してみよう。",
  "これまでの経験から、君の今感じているこの感情は『{primaryMood}』と呼ばれることが多いんだ。",
  "{primaryMood}とは…,{primaryMoodDesc}",
  "これは君が今感じているものに近いかな？",
  "そっか...",
  "心配しないで、さっき考えた基本の感情要素をもとに、君の感情に近い言葉が見つかるはずだから、",
  "この円の中の言葉から、自分にぴったりの感情を探してみよう。",
  "料理の注文に必要な「感情」が準備できたから、これからメニューを見てみよう。",
  "食べ物の香りを嗅ぐと、昔の記憶や感情を呼び覚ますことあるでしょ？",
  "君の感情にぴったりな料理の香りはどれかな？選んでみよう。",
];

// 定义每个步骤对应的对话索引范围
export const stepMessageRanges: Record<Step, { start: number; end: number }> = {
  [Step.GREETING]: { start: 0, end: 1 }, // 0-1: 前两句
  [Step.GREETING_CHOICE]: { start: 1, end: 1 }, // 2: 第三句
  [Step.OWNER_INTRO]: { start: 2, end: 6 }, // 示例
  [Step.NAME_ENTRY]: { start: 6, end: 6 }, // 示例
  [Step.MOOD_INTRO]: { start: 7, end: 10 }, // 示例
  [Step.MOOD_SLIDER_FIRST]: { start: 11, end: 11 }, // 示例
  [Step.MOOD_SLIDER_SECOND]: { start: 12, end: 12 }, // 示例
  [Step.MOOD_DESCRIPTION]: { start: 13, end: 15 }, // 示例
  [Step.MOOD_CONFIRMATION]: { start: 15, end: 15 }, // 示例
  [Step.MOOD_PICKUP_INTRO]: { start: 16, end: 18 }, // 示例
  [Step.MOOD_PICKUP_PANEL]: { start: 0, end: 0 }, // 示例
  [Step.MOOD_MENU_INTRO]: { start: 19, end: 21 }, // 示例
  [Step.MOOD_MENU]: { start: 0, end: 0 }, // 示例
  [Step.WAITING_BACKEND]: { start: 0, end: 0 }, // 示例
};
