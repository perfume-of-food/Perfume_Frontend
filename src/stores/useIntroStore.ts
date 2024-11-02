import { create } from "zustand";
import {
  introConversation,
  stepStartIndices,
} from "@/constants/introConversation";
import { stepMessageRanges } from "@/constants/introConversation";
import { Step, getNextStep } from "@/types/steps";

interface IntroState {
  step: Step;
  conversation: {
    currentIndex: number;
    messages: string[];
  };
  setStep: (step: Step) => void;
  moveToNextStep: () => void;
  setConversationIndex: (index: number) => void;
  getCurrentStepMessages: (step: Step) => string[];
  getCurrentStepStartIndex: (step: Step) => number;
  userName: string;
  setUserName: (userName: string) => void;
}

export const useIntroStore = create<IntroState>((set) => ({
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
  setConversationIndex: (index) =>
    set((state) => ({
      conversation: { ...state.conversation, currentIndex: index },
    })),
  getCurrentStepMessages: (step) => {
    const range = stepMessageRanges[step];
    return introConversation.slice(range.start, range.end + 1);
  },
  getCurrentStepStartIndex: (step) => stepStartIndices[step],
  userName: "",
  setUserName: (userName) => set({ userName: userName }),
}));
