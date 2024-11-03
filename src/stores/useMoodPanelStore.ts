import { create } from "zustand";
import { Mood } from "../types/Mood";

interface MoodState {
  selectedMood: Mood | null;
  isDescriptionFlashing: boolean;
  setSelectedMood: (mood: Mood) => void;
  setDescriptionFlash: (isFlashing: boolean) => void;
}

export const useMoodPanelStore = create<MoodState>((set) => ({
  selectedMood: null,
  isDescriptionFlashing: false,
  setSelectedMood: (mood) => set({ selectedMood: mood }),
  setDescriptionFlash: (isFlashing) =>
    set({ isDescriptionFlashing: isFlashing }),
}));
