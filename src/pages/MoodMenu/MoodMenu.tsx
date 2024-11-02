import { useState } from "react";
import { SettingButton } from "../../components/SettingButton/SettingButton";
import { DetermineButton } from "../../components/DetermineButton/DetermineButton";
import Header from '../../components/Header/Header';
import { MenuData } from "../../data/MenuData";
import Menulist from "../../components/MenuList/MenuList";
import MealDescription from "../../components/MealDescription/MealDescription";
import ConfirmPanel from "../../components/ConfirmPanel/ConfirmPanel";
import { LoadingPage } from "@/components/LoadingPage/LaodingPage"

export function MoodMenu() {
  const [selectedCategory, setSelectedCategory] = useState<string>("おすすめ");
  const [selectedMeal, setSelectedMeal] = useState<{ title: string; description: string } | null>(null);
  const [showConfirmPanel, setShowConfirmPanel] = useState<boolean>(false);
  const [confirmMessageOnly, setConfirmMessageOnly] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);

  const filteredMeals = MenuData.filter((meal) => {
    if (selectedCategory === "おすすめ") return true;
    return meal.category === selectedCategory;
  });

  const handleMealSelect = (description: string, title: string) => {
    setSelectedMeal({ title, description });
  };

  const handleDetermineButtonClick = () => {
    if (!selectedMeal) {
      setConfirmMessageOnly(true);
    } else {
      setConfirmMessageOnly(false);
    }
    setShowConfirmPanel(true);
  };

  const handleConfirm = () => {
    setShowConfirmPanel(false);
    setShowLoading(true); // 显示 loading 页面
  };

  return (
    <div className="w-screen h-screen border-x-[32px] border-y-[28px] border-black">
      <div className="grid grid-rows-[repeat(100,1fr)] grid-cols-[repeat(100,1fr)] w-full h-full border-[10px] border-orange bg-black">
        <div className="relative row-[span_7_/_span_7] col-[span_73_/_span_73] border-b-[1px] border-r-[1px] border-orange">
          <span className="leading-none font-playfair text-[8.3em] inline-block -translate-x-[0.7rem] -translate-y-[1.9rem] text-orange">
            MENU
          </span>
        </div>
        <div className="row-[span_7_/_span_7] col-[span_27_/_span_27] border-b-[1px] border-orange">
          <SettingButton />
        </div>
        <div className="row-[span_11_/_span_11] col-[span_100_/_span_100] border-b-[1px] border-orange">
          <Header onCategorySelect={setSelectedCategory} />
        </div>
        <div className="row-[span_60_/_span_60] col-[span_67_/_span_67] border-r-[1px] border-b-[1px] border-orange h-full overflow-y-scroll">
          <Menulist
            meals={filteredMeals}
            onMealSelect={(description, title) => handleMealSelect(description, title)}
          />
        </div>
        <div className="relative row-[span_60_/_span_60] col-[span_33_/_span_33] border-b-[1px] border-orange">
          <div className="flex justify-center items-end h-full">
            <img
              src="src/statics/owl.png"
              alt="Owl"
              className="w-full h-58% object-cover"
            />
          </div>
        </div>
        <div className="row-[span_22_/_span_22] col-[span_67_/_span_67] border-r-[1px] border-orange">
          <MealDescription description={selectedMeal?.description || null} />
        </div>
        <div className="row-[span_22_/_span_22] col-[span_33_/_span_33]">
          <DetermineButton onClick={handleDetermineButtonClick} />
        </div>
      </div>
      
      {/* Confirm Panel Modal */}
      {showConfirmPanel && (
        <ConfirmPanel
          title={confirmMessageOnly ? "アイコンをタップして、好きな食べ物を選んでください" : selectedMeal?.title || ""}
          onClose={() => setShowConfirmPanel(false)}
          onConfirm={handleConfirm}
          showButtons={!confirmMessageOnly}
        />
      )}

      {/* Loading Page 显示 */}
      {showLoading && (
        <div className="fixed inset-0 z-50">
          <LoadingPage />
        </div>
      )}
    </div>
  );
}
