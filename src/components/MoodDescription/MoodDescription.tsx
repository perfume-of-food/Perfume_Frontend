import { useMoodStore } from "@/stores/useMoodStore";
import { grayscaleMoodList } from "@/constants/moods";

export const MoodDescription = () => {
  const { selectedMood, isDescriptionFlashing } = useMoodStore();

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
        {selectedMood
          ? `[${selectedMood}]: ${
              grayscaleMoodList.find((mood) => mood.name === selectedMood)?.desc
            }`
          : "感情を一つ選択してください"}
      </span>
    </div>
  );
};
