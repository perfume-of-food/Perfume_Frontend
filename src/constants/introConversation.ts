import { Step } from '@/types/steps'

export const introConversation = [
  "やっと来てくれた。",
  "ようこそ……ずっと君を待っていたんだ。",
  "ここは「心の味わい」というレストランで、みんなはよく私のことを『店長』って呼んでいる。", 
  "私は昔から人間の複雑な感情に興味を持っていて、この場所を作ったんだ。",
  "普通のレストランとは違って、ここの料理は実体ではなく、君の感情が食べ物の香りとして表れるんだ……",
  "さあ、これから君の感情の旅を案内するよ。心の準備はできているかい？",
  "まず君の名前を教えてくれるかな？"
]

// 定义每个步骤对应的对话索引范围
export const stepMessageRanges: Record<Step, { start: number; end: number }> = {
  [Step.GREETING]: { start: 0, end: 1 },        // 0-1: 前两句
  [Step.GREETING_CHOICE]: { start: 1, end: 1 }, // 2: 第三句
  [Step.OWNER_INTRO]: { start: 2, end: 6 },     // 示例
  [Step.NAME_ENTRY]: { start: 6, end: 6 },      // 示例
}

// 或者更简单的方式，只记录每个步骤的起始索引
export const stepStartIndices: Record<Step, number> = {
  [Step.GREETING]: 0,
  [Step.GREETING_CHOICE]: 2,
  [Step.OWNER_INTRO]: 3,
  [Step.NAME_ENTRY]: 5,
}