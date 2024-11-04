import { create } from "zustand";
import { MoodFoodPairings, FoodCategory } from "../types/Mood";
import { useGameManagerStore } from "./useGameManagerStore";
import { FoodItem, foodList } from "../constants/foodConstants";

interface MoodMenuState {
  selectedCategory: string;
  selectedFood: {
    title: string;
    description: string;
  } | null;

  isDescriptionFlashing: boolean;

  // actions
  setSelectedCategory: (category: string) => void;
  setselectedFood: (description: string, title: string) => void;
  setDescriptionFlash: (isFlashing: boolean) => void;

  getRecommendedFoods: () => FoodItem[];
}

export const useMoodMenuStore = create<MoodMenuState>((set) => ({
  // initial state
  selectedCategory: FoodCategory.RECOMMENDED,
  selectedFood: null,
  isDescriptionFlashing: false,

  // actions
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setselectedFood: (description, title) =>
    set({ selectedFood: { title, description } }),
  setDescriptionFlash: (isFlashing) =>
    set({ isDescriptionFlashing: isFlashing }),
  getRecommendedFoods: () => {
    const relatedMoods = useGameManagerStore.getState().getRelatedMoods();
    return relatedMoods.map((mood) => {
      const foodName = MoodFoodPairings[mood.name];
      return foodList.find((food) => food.title === foodName)!;
    });
  },
}));
