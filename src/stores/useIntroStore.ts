import { create } from "zustand";
import { introConversation } from "@/constants/introConversation";
import { stepMessageRanges } from "@/constants/introConversation";
import { Step, getNextStep } from "@/types/steps";

import { grayscaleMoodList } from "@/constants/moods";

interface IntroState {
  step: Step;
  conversation: {
    currentIndex: number;
    messages: string[];
  };
  setStep: (step: Step) => void;
  moveToNextStep: () => void;
  getCurrentStepMessages: (step: Step) => string[];
  userName: string;
  setUserName: (userName: string) => void;
  joyfulValue: number;
  setJoyfulValue: (value: number) => void;
  emotionValue: number;
  setEmotionValue: (value: number) => void;
  getRecommendedMood: () => string; // 新增 getter
  getRecommendedMoodDescription: () => string; // 新增 getter
}

export const useIntroStore = create<IntroState>((set, get) => ({
  step: Step.GREETING,
  conversation: {
    currentIndex: 0,
    messages: introConversation,
  },
  setStep: (step) => set({ step }),
  moveToNextStep: () =>
    set((state) => {
      const next = getNextStep(state.step);
      return next ? { step: next } : {};
    }),
  getCurrentStepMessages: (step) => {
    const range = stepMessageRanges[step];
    return range ? introConversation.slice(range.start, range.end + 1) : [];
  },
  userName: "",
  setUserName: (userName) => set({ userName: userName }),
  joyfulValue: 50,
  setJoyfulValue: (value) => set({ joyfulValue: value }),
  emotionValue: 50,
  setEmotionValue: (value) => set({ emotionValue: value }),
  getRecommendedMood: () => {
    const state = get();
    if (state.joyfulValue >= 75 && state.emotionValue >= 75) return "Relaxed";
    if (state.joyfulValue >= 75 && state.emotionValue < 25) return "Nervous";
    if (state.joyfulValue < 25 && state.emotionValue >= 75) return "Depressed";
    if (state.joyfulValue < 25 && state.emotionValue < 25) return "Peaceful";
    return "Furious";
  },
  getRecommendedMoodDescription: () => {
    const state = get();
    const moodDescription = grayscaleMoodList.filter(
      (mood) => mood.name === state.getRecommendedMood()
    )?.[0]?.desc;
    return moodDescription || "";
  },
}));
