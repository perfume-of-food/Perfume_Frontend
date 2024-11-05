import { create } from "zustand";
import { MoodFoodPairings, FoodCategory, Food } from "../types/Mood";
import { useGameManagerStore } from "./useGameManagerStore";
import { FoodItem, foodList } from "../constants/foodConstants";
import { MoodItem } from "@/constants/moodConstants";

interface MoodMenuState {
  selectedCategory: FoodCategory;
  selectedFood: {
    title: Food;
    description: string;
  } | null;

  isDescriptionFlashing: boolean;

  // actions
  setSelectedCategory: (category: FoodCategory) => void;
  setselectedFood: (description: string, title: Food) => void;
  setDescriptionFlash: (isFlashing: boolean) => void;

  getRecommendedFoods: (baseMoodItem: MoodItem) => FoodItem[];
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
  getRecommendedFoods: (baseMoodItem: MoodItem) => {
    const relatedMoods = useGameManagerStore
      .getState()
      .getRelatedMoodItems(baseMoodItem);
    return relatedMoods.map((mood) => {
      const foodName = MoodFoodPairings[mood.name];
      return foodList.find((food) => food.title === foodName)!;
    });
  },
}));
