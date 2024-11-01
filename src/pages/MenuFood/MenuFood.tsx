import { SettingButton } from "../../components/SettingButton/SettingButton";
import { DetermineButton } from "../../components/DetermineButton/DetermineButton";
import Header from '../../components/Header/Header';
import { MenuData } from "../../data/MenuData";
import Menulist from "../../components/MenuList/MenuList";
import { useState } from "react";


export function MenuFood(){
    const [selectedCategory, setSelectedCategory] = useState<string>("おすすめ"); 
    const filteredMeals = MenuData.filter((meal) => {
        if (selectedCategory === "おすすめ") return true; // 显示全部
        return meal.category === selectedCategory;
    });
    console.log("Filtered meals:", filteredMeals);

return (
    <div className="w-screen h-screen border-x-[32px] border-y-[28px] border-black">
      <div className="grid grid-rows-[repeat(100,1fr)] grid-cols-[repeat(100,1fr)] w-full h-full border-[10px] border-orange bg-black">
        <div className="relative row-[span_7_/_span_7] col-[span_73_/_span_73] border-b-[1px] border-r-[1px] border-orange">
          {/* MENU 标题 */}
          <span className="leading-none font-playfair text-[8.3em] inline-block -translate-x-[0.7rem] -translate-y-[1.9rem] text-orange">
            MENU
          </span>
        </div>
        {/* 设定按钮 */}
        <div className="row-[span_7_/_span_7] col-[span_27_/_span_27] border-b-[1px] border-orange">
            <SettingButton />
        </div>
        {/* 菜单选项栏 */}
        <div className="row-[span_11_/_span_11] col-[span_100_/_span_100] border-b-[1px] border-orange">
            <Header onCategorySelect={setSelectedCategory} />
        </div>
        {/* 菜单选项内容，可滑动模块 */}
        <div className="row-[span_60_/_span_60] col-[span_67_/_span_67] border-r-[1px] border-b-[1px] border-orange h-full overflow-y-scroll">
            <Menulist meals={filteredMeals} />
        </div>
        {/* 猫头鹰说话栏 */}
        <div className="relative row-[span_60_/_span_60] col-[span_33_/_span_33] border-b-[1px] border-orange">
            <div className="flex justify-center items-end h-full">
            <img 
                src="src/statics/owl.png" 
                alt="Owl" 
                className="w-full h-58% object-cover"
            />
            </div>
        </div>
        {/* 食物介绍文本栏 */}
        <div className="row-[span_22_/_span_22] col-[span_67_/_span_67] border-r-[1px] border-orange"></div>
         {/* 决定按钮 */}
        <div className="row-[span_22_/_span_22] col-[span_33_/_span_33]">
          <DetermineButton />
        </div>
      </div>
    </div>
  );
}