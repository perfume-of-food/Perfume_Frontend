import { SettingButton } from "@/components/SettingButton/SettingButton";
import { MenuHero } from "@/components/MenuHero/MenuHero";
import { Conversation } from "@/components/Conversation/Conversation";
import { ReasonChoice } from "@/components/ReasonChoice/ReasonChoice";
import { ReasonChoiceButton } from "@/components/ReasonChoiceButton/ReasonChoiceButton";
import { noneMoodItem } from "@/constants/moodConstants";
import { Mood } from "@/types/Mood";
import { useGameManagerStore } from "@/stores/useGameManagerStore";
import { useMoodMenuStore } from "@/stores/useMoodMenuStore";
import { startPrint } from "@/api/PrintService";

export function ReasonSharing() {
  const { userName, getPrimaryMoodItem, setPrintTaskId, moveToNextStep, joyfulValue, emotionValue } =
    useGameManagerStore();
  const { selectedFood, getMoodForSelectedFood } = useMoodMenuStore();

  const startPrinting = async () => {
    const currentReason = useGameManagerStore.getState().foodChoiceReason;
    console.log("Starting print with current reason:", currentReason);

    let mood: Mood | null = null;
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
        reason: currentReason,
        joyfulValue,
        emotionValue,
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
        {/* 左上: MENU 标题 */}
        <div className="relative row-[span_7_/_span_7] col-[span_73_/_span_73] border-b-[1px] border-r-[1px] border-orange">
          <span className="leading-none font-playfair text-[8.3em] inline-block -translate-x-[0.7rem] -translate-y-[1.9rem] text-orange">
            MENU
          </span>
        </div>
        {/* 右上: 设置按钮 */}
        <div className="row-[span_7_/_span_7] col-[span_27_/_span_27] border-b-[1px] border-orange">
          <SettingButton />
        </div>
        {/* 中:  */}
        <div className="grid grid-rows-subgrid grid-cols-subgrid row-[span_50_/_span_50] col-[span_100_/_span_100]">
          <MenuHero />
        </div>
        <div className="flex items-center justify-center row-[span_21_/_span_21] col-[span_100_/span_100] border-b-[1px] border-orange">
          <Conversation />
        </div>
        {/* 左下: 空的弹性盒子区域 */}
        <div className="row-[span_22_/_span_22] col-[span_67_/_span_67] border-r-[1px] border-orange">
          <ReasonChoice />
        </div>
        {/* 右下: 选择按钮区域 */}
        <div className="row-[span_22_/_span_22] col-[span_33_/_span_33]">
          <ReasonChoiceButton onClick={startPrinting} />
        </div>
      </div>
    </div>
  );
}
