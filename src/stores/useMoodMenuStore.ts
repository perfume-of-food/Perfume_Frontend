import { create } from "zustand";
import { MoodFoodPairings } from "../types/Mood";
import { useIntroStore } from "./useIntroStore";
import { FoodItem, foodList } from "../constants/foodConstants";

interface MoodMenuState {
  selectedCategory: string;
  selectedMeal: {
    title: string;
    description: string;
  } | null;
  showConfirmPanel: boolean;
  confirmMessageOnly: boolean;
  showLoading: boolean;

  isDescriptionFlashing: boolean;

  // actions
  setSelectedCategory: (category: string) => void;
  setSelectedMeal: (description: string, title: string) => void;
  setShowConfirmPanel: (show: boolean) => void;
  setConfirmMessageOnly: (show: boolean) => void;
  setShowLoading: (show: boolean) => void;
  setDescriptionFlash: (isFlashing: boolean) => void;

  getRecommendedMeals: () => FoodItem[];
}

export const useMoodMenuStore = create<MoodMenuState>((set) => ({
  // initial state
  selectedCategory: "おすすめ",
  selectedMeal: null,
  showConfirmPanel: false,
  confirmMessageOnly: false,
  showLoading: false,
  isDescriptionFlashing: false,

  // actions
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedMeal: (description, title) =>
    set({ selectedMeal: { title, description } }),
  setShowConfirmPanel: (show) => set({ showConfirmPanel: show }),
  setConfirmMessageOnly: (show) => set({ confirmMessageOnly: show }),
  setShowLoading: (show) => set({ showLoading: show }),
  setDescriptionFlash: (isFlashing) =>
    set({ isDescriptionFlashing: isFlashing }),
  getRecommendedMeals: () => {
    const relatedMoods = useIntroStore.getState().getRelatedMoods();
    return relatedMoods.map((mood) => {
      const foodName = MoodFoodPairings[mood.name];
      return foodList.find((food) => food.title === foodName)!;
    });
  },
}));
