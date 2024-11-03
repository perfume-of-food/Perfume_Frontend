import { useMoodMenuStore } from "@/stores/useMoodMenuStore";

export const FoodDescription = () => {
  const { selectedFood, isDescriptionFlashing } = useMoodMenuStore();
  const description = selectedFood?.description;
  return (
    <div className="flex center items-center p-12 text-[#FFEFD0] text-3xl font-dot h-full w-full">
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


