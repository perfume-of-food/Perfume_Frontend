import { Food } from '../types/Mood';

export interface FoodItem {
  id: number;
  title: Food;
  img: string;
  description: string;
  category: string;
}

export const foodList: FoodItem[] = [
  {
    title: Food.MINT_CANDY,
    img: "/food/peppermint_candy.png",
    description:
      "「ハッカ飴」：強力なミントの香りが鼻を直撃し、思わず目を見開いて、一瞬で覚めるような感覚。",
    id: 1,
    category: "デザート",
  },

  {
    title: Food.PINEAPPLE_SHAVED_ICE,
    img: "/food/pineapple_shaved_ice.png",
    description:
      "「パインのかき氷」：日差しを浴びてキラキラ輝き、口の中でパインの香りが弾け、ほのかな香りがふわりと漂う。",
    id: 2,
    category: "デザート",
  },

  {
    title: Food.STRAWBERRY_ICE_CREAM,
    img: "/food/strawberry_icecream.png",
    description:
      "ピンク色のアイスがゆっくり溶けて、甘いイチゴの香りがふんわりと包み込む。",
    id: 3,
    category: "デザート",
  },

  {
    title: Food.CHOCOLATE,
    img: "/food/chocolate.png",
    description:
      "「チョコレート」：包み紙を開けてひと口、甘さと濃厚さが口の中でゆっくりととろけていく。",
    id: 4,
    category: "デザート",
  },

  {
    title: Food.VANILLA_CAKE,
    img: "/food/vanilla_cake.png",
    description:
      "「バニラケーキ」：ふわふわのケーキからバニラの香りが漂い、午後の日差しの温もりのような優しい味わい。",
    id: 5,
    category: "デザート",
  },

  {
    title: Food.ROSE_JELLY,
    img: "/food/rose_jelly.png",
    description:
      "「ローズゼリー」：ちょうどいい甘さで口の中で溶け、ほのかに広がるバラの香りが、静かなひとときを包み込む。",
    id: 6,
    category: "デザート",
  },

  {
    title: Food.SODA,
    img: "/food/soda.png",
    description:
      "「ソーダ」：ふたを開けた瞬間、泡があふれ出し、未知の可能性に触れたかのような感情が一気に広がる。",
    id: 7,
    category: "飲み物",
  },

  {
    title: Food.JASMINE_TEA,
    img: "/food/jasmine_tea.png",
    description:
      "「ジャスミン茶」：カップから立ち上る淡いジャスミンの香りが、静かな安らぎをもたらす。",
    id: 8,
    category: "飲み物",
  },

  {
    title: Food.HOT_TEA,
    img: "/food/hot_tea.png",
    description:
      "「ホットティー」：紅茶のほのかな香りと温かみが、静かに心の奥へ安らぎを届ける。",
    id: 9,
    category: "飲み物",
  },

  {
    title: Food.MILK,
    img: "/food/milk.png",
    description: "「牛乳」：やさしい香りが広がり、穏やかな眠気が訪れる。",
    id: 10,
    category: "飲み物",
  },

  {
    title: Food.WATER,
    img: "/food/water.png",
    description:
      "「水」：澄んだ無味の水は、その淡白さゆえに、『味』とは何かを気づかせる。",
    id: 11,
    category: "飲み物",
  },

  {
    title: Food.COFFEE,
    img: "/food/coffee.png",
    description:
      "「コーヒー」：ほろ苦い香りをまとい、ほのかな甘さが疲れを癒してくれる。",
    id: 12,
    category: "飲み物",
  },

  {
    title: Food.WINE,
    img: "/food/wine.png",
    description:
      "「ワイン」：深紅の液体が穏やかに流れ、ほろ苦い果実の香りが立ち昇る。",
    id: 13,
    category: "飲み物",
  },

  {
    title: Food.BEER,
    img: "/food/beer.png",
    description:
      "「ビール」：舌先で微かな泡がはじけ、ほのかな酔いがゆっくりと全身にしみ込む。",
    id: 14,
    category: "飲み物",
  },

  {
    title: Food.FRIED_CHICKEN,
    img: "/food/fried_chicken.png",
    description:
      "「唐揚げ」：カリカリの衣から肉汁があふれ、まるで居酒屋の賑���かな雰囲気が蘇るようだ。",
    id: 15,
    category: "一品料理",
  },

  {
    title: Food.SWEET_POTATO,
    img: "/food/baked_sweet_potato.png",
    description:
      "「焼き芋」：ほんのり甘い香りとともに広がる温かさが、大地の素朴なエネルギーを感じさせる。",
    id: 16,
    category: "一品料理",
  },

  {
    title: Food.MIXED_NUTS,
    img: "/food/mixed_nuts.png",
    description:
      "「ミックスナッツ」：噛めば噛むほど香りが増す素朴なナッツ、くつろぎタイムに欠かせない美味しさ。",
    id: 17,
    category: "一品料理",
  },

  {
    title: Food.BITTER_GOURD_SALAD,
    img: "/food/bitter_melon_salad.png",
    description:
      "「ゴーヤサラダ」：噛むほどに淡い苦みが深まり、口の中でじんわりと広がっていく。",
    id: 18,
    category: "一品料理",
  },

  {
    title: Food.MEDICINAL_SOUP,
    img: "/food/herb_soup.png",
    description:
      "「薬膳スープ」：薬草の苦味が何層にも重なり、絶妙な香りが長く残る。",
    id: 19,
    category: "一品料理",
  },

  {
    title: Food.MUSHROOM_SOUP,
    img: "/food/mushroom_soup.png",
    description:
      "「？きのこスープ」：���う香りの中に潜む言いようのない気配が、ほんの少しの躊躇を感じさせる。",
    id: 20,
    category: "一品料理",
  },

  {
    title: Food.SPICY_MAPO_TOFU,
    img: "/food/mapo_tofu.png",
    description:
      "「激辛麻婆豆腐」：舌に直接ぶつかる辛さが、一口で顔を熱く染める。",
    id: 21,
    category: "一品料理",
  },

  {
    title: Food.CIGARETTE,
    img: "/food/cigarette.png",
    description:
      "「たばこ」：ほのかな煙草の香りが微かな苦味とともに満ち、空気にゆっくりと広がっていく。",
    id: 22,
    category: "その他",
  },

  {
    title: Food.RICE_VINEGAR,
    img: "/food/vinegar.png",
    description: "「米酢」:発酵した酸味が舌全体を覆い、余韻が静かに残る。",
    id: 23,
    category: "その他",
  },

  {
    title: Food.WASABI,
    img: "/food/wasabi.png",
    description:
      "「わさび」：鋭い辛みが鼻腔を突き抜け、一瞬で引き締まるような感覚。",
    id: 24,
    category: "その他",
  },
];
