import { create } from "zustand";
import { conversationFlow } from "@/constants/conversationConstants";
import { Step, getNextStep } from "@/types/Step";

import { MoodItem, grayscaleMoodList } from "@/constants/moodConstants";

interface GameState {
  step: Step;
  setStep: (step: Step) => void;
  moveToNextStep: () => void;
  getCurrentStepMessages: (step: Step) => string[];
  userName: string;
  setUserName: (userName: string) => void;
  joyfulValue: number;
  setJoyfulValue: (value: number) => void;
  emotionValue: number;
  setEmotionValue: (value: number) => void;
  getPrimaryMoodItem: () => MoodItem;
  getRelatedMoodItems: (baseMoodItem: MoodItem) => MoodItem[];
  printTaskId: number;
  setPrintTaskId: (taskId: number) => void;
}

export const useGameManagerStore = create<GameState>((set, get) => ({
  step: Step.GREETING,
  setStep: (step) => set({ step }),
  moveToNextStep: () =>
    set((state) => {
      const next = getNextStep(state.step);
      return next ? { step: next } : {};
    }),
  getCurrentStepMessages: (step) => {
    const range = conversationFlow.find(
      (section) => section.step === step
    )?.messages;
    return range ?? [];
  },
  userName: "",
  setUserName: (userName) => set({ userName: userName }),
  joyfulValue: 0,
  setJoyfulValue: (value) => set({ joyfulValue: value }),
  emotionValue: 0,
  setEmotionValue: (value) => set({ emotionValue: value }),
  getPrimaryMoodItem: () => {
    const state = get();
    const distances = grayscaleMoodList.map((mood) => ({
      ...mood,
      distance: Math.sqrt(
        Math.pow(state.joyfulValue - mood.x, 2) +
          Math.pow(state.emotionValue - mood.y, 2)
      ),
    }));

    const sortedMoods = distances.sort((a, b) => a.distance - b.distance);
    return grayscaleMoodList.filter((mood) => mood.id === sortedMoods[0].id)[0];
  },

  getRelatedMoodItems: (baseMoodItem: MoodItem) => {
    const prevId = baseMoodItem.id === 1 ? 24 : baseMoodItem.id - 1;
    const nextId = baseMoodItem.id === 24 ? 1 : baseMoodItem.id + 1;

    const prevMood = grayscaleMoodList.find((mood) => mood.id === prevId)!;
    const nextMood = grayscaleMoodList.find((mood) => mood.id === nextId)!;

    return [baseMoodItem, prevMood, nextMood];
  },
  printTaskId: 0,
  setPrintTaskId: (taskId) => set({ printTaskId: taskId }),
}));
