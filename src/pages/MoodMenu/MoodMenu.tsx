import { useState } from "react";
import { SettingButton } from "@/components/SettingButton/SettingButton";
import { DetermineButton } from "@/components/DetermineButton/DetermineButton";
import Header from "@/components/Header/Header";
import Menulist from "@/components/MenuList/MenuList";
import { FoodDescription } from "@/components/FoodDescription/FoodDescription";
import ConfirmPanel from "@/components/ConfirmPanel/ConfirmPanel";
import owl_stick from "@/assets/owl_stick.png";
import { useMoodMenuStore } from "@/stores/useMoodMenuStore";
import { useGameManagerStore } from "@/stores/useGameManagerStore";
import { FoodCategory, Mood } from "@/types/Mood";
import { startPrint } from "@/api/PrintService";
import { noneMoodItem } from "@/constants/moodConstants";

export function MoodMenu() {
  const { userName, moveToNextStep, setPrintTaskId, getPrimaryMoodItem } =
    useGameManagerStore();
  const {
    selectedFood,
    setDescriptionFlash,
    selectedCategory,
    getMoodForSelectedFood,
  } = useMoodMenuStore();
  const [showConfirmPanel, setShowConfirmPanel] = useState(false);

  const handleConfirm = async () => {
    let mood: Mood | null  = null;
    if (getPrimaryMoodItem() === noneMoodItem) {
      mood = noneMoodItem.name;
    } else {
      mood = getMoodForSelectedFood()!;
    }

    try {
      const taskId = Date.now();
      const res = await startPrint({
        customerName: userName,
        perfume: mood,
        food: selectedFood!.title,
        task_id: taskId,
      });
      if (res.status === 200) {
        setPrintTaskId(taskId);
        moveToNextStep();
      } else {
        console.error("Print failed:", res.data.message);
      }
    } catch (error) {
      console.error("Print failed:", error);
    }
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
          <Header />
        </div>
        <div className="row-[span_60_/_span_60] col-[span_67_/_span_67] border-r-[1px] border-b-[1px] border-orange h-full overflow-y-scroll">
          <Menulist />
        </div>
        <div className="relative row-[span_60_/_span_60] col-[span_33_/_span_33] border-b-[1px] border-orange">
          <div className="flex flex-col justify-around items-end h-full">
            <div className="pr-6 relative">
              <svg
                width="247"
                height="269"
                viewBox="0 0 247 269"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_241_69" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M237.344 0H9.65638L0 25.8354V197.165L9.65638 223H173L187.289 268.75L201.579 223H237.344L247 197.165V25.8354L237.344 0Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M237.344 0H9.65638L0 25.8354V197.165L9.65638 223H173L187.289 268.75L201.579 223H237.344L247 197.165V25.8354L237.344 0Z"
                  fill="#FEA237"
                  fillOpacity="0.2"
                />
                <path
                  d="M9.65638 0V-1H8.96258L8.71967 -0.35011L9.65638 0ZM237.344 0L238.28 -0.35011L238.037 -1H237.344V0ZM0 25.8354L-0.936709 25.4853L-1 25.6546V25.8354H0ZM0 197.165H-1V197.345L-0.936709 197.515L0 197.165ZM9.65638 223L8.71967 223.35L8.96258 224H9.65638V223ZM173 223L173.955 222.702L173.735 222H173V223ZM187.289 268.75L186.335 269.048L187.289 272.104L188.244 269.048L187.289 268.75ZM201.579 223V222H200.844L200.624 222.702L201.579 223ZM237.344 223V224H238.037L238.28 223.35L237.344 223ZM247 197.165L247.937 197.515L248 197.345V197.165H247ZM247 25.8354H248V25.6546L247.937 25.4853L247 25.8354ZM9.65638 1H237.344V-1H9.65638V1ZM0.936709 26.1855L10.5931 0.35011L8.71967 -0.35011L-0.936709 25.4853L0.936709 26.1855ZM1 197.165V25.8354H-1V197.165H1ZM10.5931 222.65L0.936709 196.815L-0.936709 197.515L8.71967 223.35L10.5931 222.65ZM173 222H9.65638V224H173V222ZM188.244 268.452L173.955 222.702L172.045 223.298L186.335 269.048L188.244 268.452ZM200.624 222.702L186.335 268.452L188.244 269.048L202.533 223.298L200.624 222.702ZM237.344 222H201.579V224H237.344V222ZM246.063 196.815L236.407 222.65L238.28 223.35L247.937 197.515L246.063 196.815ZM246 25.8354V197.165H248V25.8354H246ZM236.407 0.35011L246.063 26.1855L247.937 25.4853L238.28 -0.35011L236.407 0.35011Z"
                  fill="#FEA237"
                  mask="url(#path-1-inside-1_241_69)"
                />
              </svg>
              <div className="absolute top-0 left-0 pt-2 pl-4 pr-6 font-dot text-beige text-2xl whitespace-pre-line">
                {selectedCategory === FoodCategory.RECOMMENDED
                  ? getPrimaryMoodItem() === noneMoodItem
                    ? "無の感情におすすめする料理はないよ。\n\n他の料理を自由に選んでください。"
                    : "これまでの経験から君におすすめする三品だよ。\n\nもちろん他の料理も自由に選んでいい。"
                  : "君がどの料理を選ぶのか…楽しみだな。"}
              </div>
            </div>
            <img
              src={owl_stick}
              alt="Owl"
              className="w-full h-[57%] object-contain"
            />
          </div>
        </div>
        <div className="row-[span_22_/_span_22] col-[span_67_/_span_67] border-r-[1px] border-orange">
          <FoodDescription />
        </div>
        <div className="row-[span_22_/_span_22] col-[span_33_/_span_33]">
          <DetermineButton
            onClick={() => {
              if (selectedFood) {
                setShowConfirmPanel(true);
              } else {
                setDescriptionFlash(true);
                setTimeout(() => {
                  setDescriptionFlash(false);
                }, 300);
              }
            }}
          />
        </div>
      </div>

      {/* Confirm Panel Modal */}
      {showConfirmPanel && (
        <ConfirmPanel
          title={selectedFood?.title || ""}
          onClose={() => setShowConfirmPanel(false)}
          onConfirm={handleConfirm}
          showButtons={true}
        />
      )}
    </div>
  );
}
