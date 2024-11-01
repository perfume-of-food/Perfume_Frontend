import { create } from 'zustand'
import { grayscaleMoodList } from '../constants/moods'

type MoodName = typeof grayscaleMoodList[number]['name']

interface MoodState {
  selectedMood: MoodName | null
  setSelectedMood: (mood: MoodName) => void
}

export const useMoodStore = create<MoodState>((set) => ({
  selectedMood: null,
  setSelectedMood: (mood) => set({ selectedMood: mood }),
}))