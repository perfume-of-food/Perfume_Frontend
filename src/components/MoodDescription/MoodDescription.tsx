import { useMoodPanelStore } from "@/stores/useMoodPanelStore";
import { grayscaleMoodList } from "@/constants/moodConstants";

export const MoodDescription = () => {
  const { selectedMoodItem, isDescriptionFlashing } = useMoodPanelStore();

  return (
    <div className="w-full h-full flex justify-center items-center font-dot text-[1.75rem] leading-[1.5] text-beige text-opacity-60">
      <span
        className="px-12"
        style={{
          animation: isDescriptionFlashing
            ? "jumpUp 300ms ease-in-out"
            : "none",
        }}
      >
        {selectedMoodItem
          ? `[${selectedMoodItem.name}]: ${
              grayscaleMoodList.find(
                (mood) => mood.name === selectedMoodItem.name
              )?.desc
            }`
          : "感情を一つ選択してください"}
      </span>
    </div>
  );
};
