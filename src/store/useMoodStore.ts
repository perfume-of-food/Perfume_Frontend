import { create } from 'zustand'
import { grayscaleMoodList } from '../constants/moods'

type MoodName = typeof grayscaleMoodList[number]['name']

interface MoodState {
  selectedMood: MoodName | null
  isDescriptionFlashing: boolean
  setSelectedMood: (mood: MoodName) => void
  setDescriptionFlash: (isFlashing: boolean) => void
}

export const useMoodStore = create<MoodState>((set) => ({
  selectedMood: null,
  isDescriptionFlashing: false,
  setSelectedMood: (mood) => set({ selectedMood: mood }),
  setDescriptionFlash: (isFlashing) => set({ isDescriptionFlashing: isFlashing }),
}))