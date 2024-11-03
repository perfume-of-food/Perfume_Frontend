import { create } from "zustand";
import { introConversation } from "@/constants/introConversation";
import { stepMessageRanges } from "@/constants/introConversation";
import { Step, getNextStep } from "@/types/Step";

import { Mood, grayscaleMoodList } from "@/constants/moods";

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
  getPrimaryMood: () => Mood;
  getRelatedMoods: () => Mood[];
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
  joyfulValue: 0,
  setJoyfulValue: (value) => set({ joyfulValue: value }),
  emotionValue: 0,
  setEmotionValue: (value) => set({ emotionValue: value }),
  getPrimaryMood: () => {
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

  getRelatedMoods: () => {
    const state = get();
    const distances = grayscaleMoodList.map((mood) => ({
      ...mood,
      distance: Math.sqrt(
        Math.pow(state.joyfulValue - mood.x, 2) +
          Math.pow(state.emotionValue - mood.y, 2)
      ),
    }));

    const sortedMoods = distances.sort((a, b) => a.distance - b.distance);
    const primaryMoodId = sortedMoods[0].id;

    const prevId = primaryMoodId === 1 ? 24 : primaryMoodId - 1;
    const nextId = primaryMoodId === 24 ? 1 : primaryMoodId + 1;

    const primaryMood = grayscaleMoodList.find(
      (mood) => mood.id === primaryMoodId
    )!;
    const prevMood = grayscaleMoodList.find((mood) => mood.id === prevId)!;
    const nextMood = grayscaleMoodList.find((mood) => mood.id === nextId)!;

    return [primaryMood, prevMood, nextMood];
  },
}));
