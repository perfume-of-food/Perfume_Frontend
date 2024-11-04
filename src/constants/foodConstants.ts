import { Food, FoodCategory } from "../types/Mood";

export interface FoodItem {
  id: number;
  title: Food;
  img: string;
  description: string;
  category: FoodCategory;
}

export const foodList: FoodItem[] = [
  {
    title: Food.MINT_CANDY,
    img: "/food/peppermint_candy.png",
    description:
      "強力なミントの香りが鼻を直撃し、思わず目を見開いて、一瞬で覚めるような感覚。",
    id: 1,
    category: FoodCategory.DESSERT,
  },

  {
    title: Food.PINEAPPLE_SHAVED_ICE,
    img: "/food/pineapple_shaved_ice.png",
    description:
      "日差しを浴びてキラキラ輝き、口の中でパインの香りが弾け、ほのかな香りがふわりと漂う。",
    id: 2,
    category: FoodCategory.DESSERT,
  },

  {
    title: Food.STRAWBERRY_ICE_CREAM,
    img: "/food/strawberry_icecream.png",
    description:
      "ピンク色のアイスがゆっくり溶けて、甘いイチゴの香りがふんわりと包み込む。",
    id: 3,
    category: FoodCategory.DESSERT,
  },

  {
    title: Food.CHOCOLATE,
    img: "/food/chocolate.png",
    description:
      "包み紙を開けてひと口、甘さと濃厚さが口の中でゆっくりととろけていく。",
    id: 4,
    category: FoodCategory.DESSERT,
  },

  {
    title: Food.VANILLA_CAKE,
    img: "/food/vanilla_cake.png",
    description:
      "ふわふわのケーキからバニラの香りが漂い、午後の日差しの温もりのような優しい味わい。",
    id: 5,
    category: FoodCategory.DESSERT,
  },

  {
    title: Food.ROSE_JELLY,
    img: "/food/rose_jelly.png",
    description:
      "ちょうどいい甘さが口の中で溶け、ほのかに広がるバラの香りが、静かなひとときを包み込む。",
    id: 6,
    category: FoodCategory.DESSERT,
  },

  {
    title: Food.SODA,
    img: "/food/soda.png",
    description:
      "ふたを開けた瞬間、泡があふれ出し、未知の可能性に触れたかのような感情が一気に広がる。",
    id: 7,
    category: FoodCategory.BEVERAGE,
  },

  {
    title: Food.JASMINE_TEA,
    img: "/food/jasmine_tea.png",
    description:
      "カップから立ち上る淡いジャスミンの香りが、静かな安らぎをもたらす。",
    id: 8,
    category: FoodCategory.BEVERAGE,
  },

  {
    title: Food.HOT_TEA,
    img: "/food/hot_tea.png",
    description: "紅茶のほのかな香りと温かみが、静かに心の奥へ安らぎを届ける。",
    id: 9,
    category: FoodCategory.BEVERAGE,
  },

  {
    title: Food.MILK,
    img: "/food/milk.png",
    description: "やさしい香りが広がり、穏やかな眠気が訪れる。",
    id: 10,
    category: FoodCategory.BEVERAGE,
  },

  {
    title: Food.WATER,
    img: "/food/water.png",
    description:
      "澄んだ無味の水は、その淡白さゆえに、『味』とは何かを気づかせる。",
    id: 11,
    category: FoodCategory.BEVERAGE,
  },

  {
    title: Food.COFFEE,
    img: "/food/coffee.png",
    description: "ほろ苦い香りをまとい、ほのかな甘さが疲れを癒してくれる。",
    id: 12,
    category: FoodCategory.BEVERAGE,
  },

  {
    title: Food.WINE,
    img: "/food/wine.png",
    description: "深紅の液体が穏やかに流れ、ほろ苦い果実の香りが立ち昇る。",
    id: 13,
    category: FoodCategory.BEVERAGE,
  },

  {
    title: Food.BEER,
    img: "/food/beer.png",
    description:
      "舌先で微かな泡がはじけ、ほのかな酔いがゆっくりと全身にしみ込む。",
    id: 14,
    category: FoodCategory.BEVERAGE,
  },

  {
    title: Food.FRIED_CHICKEN,
    img: "/food/fried_chicken.png",
    description:
      "カリカリの衣から肉汁があふれ、まるで居酒屋の賑かな雰囲気が蘇るようだ。",
    id: 15,
    category: FoodCategory.DISH,
  },

  {
    title: Food.SWEET_POTATO,
    img: "/food/baked_sweet_potato.png",
    description:
      "ほんのり甘い香りとともに広がる温かさが、大地の素朴なエネルギーを感じさせる。",
    id: 16,
    category: FoodCategory.DISH,
  },

  {
    title: Food.MIXED_NUTS,
    img: "/food/mixed_nuts.png",
    description:
      "噛めば噛むほど香りが増す素朴なナッツ、くつろぎタイムに欠かせない美味しさ。",
    id: 17,
    category: FoodCategory.DISH,
  },

  {
    title: Food.BITTER_GOURD_SALAD,
    img: "/food/bitter_melon_salad.png",
    description: "噛むほどに淡い苦みが深まり、口の中でじんわりと広がっていく。",
    id: 18,
    category: FoodCategory.DISH,
  },

  {
    title: Food.MEDICINAL_SOUP,
    img: "/food/herb_soup.png",
    description: "薬草の苦味が何層にも重なり、絶妙な香りが長く残る。",
    id: 19,
    category: FoodCategory.DISH,
  },

  {
    title: Food.MUSHROOM_SOUP,
    img: "/food/mushroom_soup.png",
    description:
      "誘う香りの中に潜む言いようのない気配が、ほんの少しの躊躇を感じさせる。",
    id: 20,
    category: FoodCategory.DISH,
  },

  {
    title: Food.SPICY_MAPO_TOFU,
    img: "/food/mapo_tofu.png",
    description: "舌に直接ぶつかる辛さが、一口で顔を熱く染める。",
    id: 21,
    category: FoodCategory.DISH,
  },

  {
    title: Food.CIGARETTE,
    img: "/food/cigarette.png",
    description:
      "ほのかな煙草の香りが微かな苦味とともに満ち、空気にゆっくりと広がっていく。",
    id: 22,
    category: FoodCategory.OTHER,
  },

  {
    title: Food.RICE_VINEGAR,
    img: "/food/vinegar.png",
    description: "発酵した酸味が舌全体を覆い、余韻が静かに残る。",
    id: 23,
    category: FoodCategory.OTHER,
  },

  {
    title: Food.WASABI,
    img: "/food/wasabi.png",
    description: "鋭い辛みが鼻腔を突き抜け、一瞬で引き締まるような感覚。",
    id: 24,
    category: FoodCategory.OTHER,
  },
];
