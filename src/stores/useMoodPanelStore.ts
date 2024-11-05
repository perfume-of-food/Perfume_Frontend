import { create } from "zustand";
import { MoodItem } from "@/constants/moodConstants";

interface MoodState {
  selectedMoodItem: MoodItem | null;
  isDescriptionFlashing: boolean;
  setSelectedMoodItem: (moodItem: MoodItem) => void;
  setDescriptionFlash: (isFlashing: boolean) => void;
}

export const useMoodPanelStore = create<MoodState>((set) => ({
  selectedMoodItem: null,
  isDescriptionFlashing: false,
  setSelectedMoodItem: (moodItem) => set({ selectedMoodItem: moodItem }),
  setDescriptionFlash: (isFlashing) =>
    set({ isDescriptionFlashing: isFlashing }),
}));
