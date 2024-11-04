import { Step } from "@/types/Step";
interface DialogueSection {
  step: Step;
  messages: string[];
}

export const conversationFlow: DialogueSection[] = [
  {
    step: Step.GREETING,
    messages: ["やっと来てくれた。", "ようこそ……ずっと君を待っていたんだ。"],
  },
  {
    step: Step.GREETING_CHOICE,
    messages: ["ようこそ……ずっと君を待っていたんだ。"],
  },
  {
    step: Step.OWNER_INTRO,
    messages: [
      "ここは「心の味わい」というレストランで、みんなはよく私のことを『店長』って呼んでいる。",
      "私は昔から人間の複雑な感情に興味を持っていて、この場所を作ったんだ。",
      "このレストランは、普通とは違って、ここの料理は実体ではなく、君の感情が食べ物の香りとして表れるんだ……",
      "さあ、これから君の感情の旅を案内するよ。心の準備はできているかい？",
      "まず君の名前を教えてくれるかな？",
    ],
  },
  {
    step: Step.NAME_ENTRY,
    messages: ["まず君の名前を教えてくれるかな？"],
  },
  {
    step: Step.MOOD_INTRO,
    messages: [
      "さて、{userName}さん、最近の君はどんな気持ちで過ごしているかを教えて欲しい。あるいは、過去の心に残る瞬間を思い出してもいいよ。",
      "たとえば、誰かと過ごした幸せな時間、激しい喧嘩の時の怒り、あるいは静かな雨の夜に感じた寂しさなど……",
      "目を閉じて、静かに感じてみて。",
      "どうだい？感情をそのまま言葉にするのは難しいかもしれないから、まずは感情の二つの基本的な性質から探ってみよう。",
    ],
  },
  {
    step: Step.MOOD_SLIDER_FIRST,
    messages: [
      "スライダーをドラッグして、君の感情が『うれしい』と『かなしい』の間でどちらに近いか、感情の性質を考えてみよう。",
    ],
  },
  {
    step: Step.MOOD_SLIDER_SECOND,
    messages: [
      "スライダーをドラッグして、君の感情が『はげしい』と『へいたん』の間でどちらに近いか、感情の強さを探してみよう。",
    ],
  },
  {
    step: Step.MOOD_DESCRIPTION,
    messages: [
      "これまでの経験から、君の今感じているこの感情は『{primaryMood}』と呼ばれることが多いんだ。",
      "{primaryMood}とは…,{primaryMoodDesc}",
      "これは君が今感じているものに近いかな？",
    ],
  },
  {
    step: Step.MOOD_CONFIRMATION,
    messages: ["これは君が今感じているものに近いかな？"],
  },
  {
    step: Step.MOOD_PICKUP_INTRO,
    messages: [
      "そっか...",
      "心配しないで、さっき考えた基本の感情要素をもとに、君の感情に近い言葉が見つかるはずだから、",
      "この円の中の言葉から、自分にぴったりの感情を探してみよう。",
    ],
  },
  {
    step: Step.MOOD_PICKUP_PANEL,
    messages: [],
  },
  {
    step: Step.MOOD_MENU_INTRO,
    messages: [
      "料理の注文に必要な「感情」が準備できたから、これからメニューを見てみよう。",
      "食べ物の香りを嗅ぐと、昔の記憶や感情を呼び覚ますことあるでしょ？",
      "君の感情にぴったりな料理の香りはどれかな？選んでみよう。",
    ],
  },
  {
    step: Step.MOOD_MENU,
    messages: [],
  },
  {
    step: Step.WAITING_BACKEND,
    messages: [],
  },
];
