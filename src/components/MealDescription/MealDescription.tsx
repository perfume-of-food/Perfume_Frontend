import { useMoodMenuStore } from "@/stores/useMoodMenuStore";

const MealDescription = () => {
  const { selectedMeal, isDescriptionFlashing } = useMoodMenuStore();
  const description = selectedMeal?.description;
  return (
    <div className="meal-description flex center items-center p-12 text-[#FFEFD0] text-3xl font-dot h-full w-full">
      <span
        className="px-12"
        style={{
          animation: isDescriptionFlashing
            ? "jumpUp 300ms ease-in-out"
            : "none",
        }}
      >
        {description ?? "アイコンをタップして、好きな食べ物を選んでください"}
      </span>
    </div>
  );
};

export default MealDescription;
