export enum Step {
  GREETING = "GREETING",
  GREETING_CHOICE = "GREETING_CHOICE",
  OWNER_INTRO = "OWNER_INTRO",
  NAME_ENTRY = "NAME_ENTRY",
  // ... 可以继续添加更多步骤
}

export const STEP_ORDER: Step[] = [
  Step.GREETING,
  Step.GREETING_CHOICE,
  Step.OWNER_INTRO,
  Step.NAME_ENTRY,
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
