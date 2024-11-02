export enum Step {
  GREETING = "GREETING",
  GREETING_CHOICE = "GREETING_CHOICE",
  OWNER_INTRO = "OWNER_INTRO",
  NAME_ENTRY = "NAME_ENTRY",
  MOOD_INTRO = "MOOD_INTRO",
  MOOD_SLIDER_FIRST = "MOOD_SLIDER_FIRST",
  MOOD_SLIDER_SECOND = "MOOD_SLIDER_SECOND",
  MOOD_DESCRIPTION = "MOOD_DESCRIPTION",
  MOOD_CONFIRMATION = "MOOD_CONFIRMATION",
  MOOD_PICKUP_INTRO = "MOOD_PICKUP_INTRO",
  MOOD_PICKUP_PANEL = "MOOD_PICKUP_PANEL",
  MOOD_MENU_INTRO = "MOOD_MENU_INTRO",
  MOOD_MENU = "MOOD_MENU",
  // ... 可以继续添加更多步骤
}

export const STEP_ORDER: Step[] = [
  Step.GREETING,
  Step.GREETING_CHOICE,
  Step.OWNER_INTRO,
  Step.NAME_ENTRY,
  Step.MOOD_INTRO,
  Step.MOOD_SLIDER_FIRST,
  Step.MOOD_SLIDER_SECOND,
  Step.MOOD_DESCRIPTION,
  Step.MOOD_CONFIRMATION,
  Step.MOOD_PICKUP_INTRO,
  Step.MOOD_PICKUP_PANEL,
  Step.MOOD_MENU_INTRO,
  Step.MOOD_MENU,
];

export const getNextStep = (currentStep: Step): Step | null => {
  const currentIndex = STEP_ORDER.indexOf(currentStep);
  // 如果是最后一个步骤，返回 null
  if (currentIndex === STEP_ORDER.length - 1) {
    return null;
  }
  // 否则返回下一个步骤
  return STEP_ORDER[currentIndex + 1];
};
