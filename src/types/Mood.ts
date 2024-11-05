export enum Mood {
  NONE = "無",
  AMAZEMENT = "驚愕",
  SURPRISE = "サプライズ",
  EXCITEMENT = "ワクワク",
  JOY = "喜び",
  SATISFACTION = "満足",
  HAPPINESS = "嬉しい",
  BLESSED = "幸せ",
  RELIEF = "安心",
  FULFILLMENT = "充実感",
  RELAXED = "リラックス",
  PEACEFUL = "穏やか",
  CALM = "冷静",
  DAZED = "ぼんやり",
  BORED = "退屈",
  TIRED = "疲れた",
  SLUGGISH = "だるい",
  SAD = "悲しい",
  DEPRESSED = "憂鬱",
  MISERABLE = "惨め",
  DISAPPOINTED = "がっかり",
  IRRITATED = "いらいら",
  FEAR = "恐怖",
  NERVOUS = "緊張",
  ANGRY = "怒り",
}

export enum Food {
  MINT_CANDY = "ハッカ飴",
  SODA = "ソーダ",
  PINEAPPLE_SHAVED_ICE = "パインのかき氷",
  STRAWBERRY_ICE_CREAM = "いちごアイス",
  FRIED_CHICKEN = "唐揚げ",
  CHOCOLATE = "チョコレート",
  VANILLA_CAKE = "バニラケーキ",
  ROSE_JELLY = "ローズゼリー",
  SWEET_POTATO = "焼き芋",
  MIXED_NUTS = "ミックスナッツ",
  JASMINE_TEA = "ジャスミン茶",
  HOT_TEA = "ホットティー",
  MILK = "牛乳",
  WATER = "水",
  COFFEE = "コーヒー",
  CIGARETTE = "たばこ",
  RICE_VINEGAR = "激スッパオレンジ",
  WINE = "ワイン",
  BITTER_GOURD_SALAD = "ゴーヤサラダ",
  BEER = "ビール",
  MEDICINAL_SOUP = "薬膳スープ",
  MUSHROOM_SOUP = "?きのこスープ",
  WASABI = "わさび",
  SPICY_MAPO_TOFU = "激辛麻婆豆腐"
}

export enum FoodCategory {
  DESSERT = "デザート",
  BEVERAGE = "飲み物",
  DISH = "一品料理",
  OTHER = "その他",
  RECOMMENDED = "おすすめ"
}

export const MoodFoodPairings: Record<Mood, Food> = {
  [Mood.AMAZEMENT]: Food.MINT_CANDY,
  [Mood.SURPRISE]: Food.SODA,
  [Mood.EXCITEMENT]: Food.PINEAPPLE_SHAVED_ICE,
  [Mood.JOY]: Food.STRAWBERRY_ICE_CREAM,
  [Mood.SATISFACTION]: Food.FRIED_CHICKEN,
  [Mood.HAPPINESS]: Food.CHOCOLATE,
  [Mood.BLESSED]: Food.VANILLA_CAKE,
  [Mood.RELIEF]: Food.ROSE_JELLY,
  [Mood.FULFILLMENT]: Food.SWEET_POTATO,
  [Mood.RELAXED]: Food.MIXED_NUTS,
  [Mood.PEACEFUL]: Food.JASMINE_TEA,
  [Mood.CALM]: Food.HOT_TEA,
  [Mood.DAZED]: Food.MILK,
  [Mood.BORED]: Food.WATER,
  [Mood.TIRED]: Food.COFFEE,
  [Mood.SLUGGISH]: Food.CIGARETTE,
  [Mood.SAD]: Food.RICE_VINEGAR,
  [Mood.DEPRESSED]: Food.WINE,
  [Mood.MISERABLE]: Food.BITTER_GOURD_SALAD,
  [Mood.DISAPPOINTED]: Food.BEER,
  [Mood.IRRITATED]: Food.MEDICINAL_SOUP,
  [Mood.FEAR]: Food.MUSHROOM_SOUP,
  [Mood.NERVOUS]: Food.WASABI,
  [Mood.ANGRY]: Food.SPICY_MAPO_TOFU,
};
