import { create } from "zustand";
import { Mood, MoodFoodPairings, Food } from "../types/Mood";
import { useIntroStore } from "./useIntroStore";

interface MoodState {
  selectedMood: Mood | null;
  isDescriptionFlashing: boolean;
  setSelectedMood: (mood: Mood) => void;
  setDescriptionFlash: (isFlashing: boolean) => void;
  getRecommendedMeals: () => Food[];
}

export const useMoodStore = create<MoodState>((set) => ({
  selectedMood: null,
  isDescriptionFlashing: false,
  setSelectedMood: (mood) => set({ selectedMood: mood }),
  setDescriptionFlash: (isFlashing) =>
    set({ isDescriptionFlashing: isFlashing }),
  getRecommendedMeals: () => {
    const relatedMoods = useIntroStore.getState().getRelatedMoods();
    return relatedMoods.map((mood) => MoodFoodPairings[mood.name]);
  },
}));
