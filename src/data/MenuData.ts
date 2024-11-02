export interface Meal {
    id: number;
    title: string;
    img: string;
    description: string;
    category:string;
  }
  
  export const MenuData: Meal[] = [
{
    title: '菠萝沙冰',
    img:'/food/pineapple_shaved_ice.png',
    description:'在这里替换掉你想要的形容',
    id: 1,
    category:'デザート',
},

{
    title: '草莓冰淇淋',
    img:'/food/strawberry_icecream.png',
    description:'在这里替换掉你想要的形容',
    id: 2,
    category:'デザート',
},

{
    title: '巧克力',
    img:'/food/chocolate.png',
    description:'在这里替换掉你想要的形容',
    id: 3,
    category:'デザート',
},

{
    title: '香草蛋糕',
    img:'/food/vanilla_cake.png',
    description:'「香草蛋糕」：一片奶油蛋糕，上面点缀着樱桃。散发出黄油和面粉的甜味，脸上浮现出幸福的微笑。',
    id: 4,
    category:'デザート',
},

]
