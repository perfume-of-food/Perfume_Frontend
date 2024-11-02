import { MenuData } from "@/constants/MenuData";

import { useMoodMenuStore } from "@/stores/useMoodMenuStore";
const Menulist = () => {
  const { selectedCategory, selectedMeal, setSelectedMeal } =
    useMoodMenuStore();

  return (
    <div className="relative w-full h-full overflow-x-hidden">
      <div className="relative px-5 py-2 overflow-y-scroll h-full">
        {MenuData.filter((meal) => meal.category === selectedCategory).map(
          (meal) => (
            <div
              key={meal.id}
              className="w-full flex justify-between items-center"
            >
              <div
                className="relative w-48 h-48 flex justify-center items-center"
                onClick={() => {
                  setSelectedMeal(meal.description, meal.title);
                }}
              >
                <img
                  src={meal.img}
                  alt="img"
                  className="object-contain w-[92%] h-[92%] relative z-10"
                />
                <div className="absolute top-1/2 transform -translate-y-1/2 h-1/3 flex justify-center items-center">
                  <svg
                    className="w-full h-full transition-opacity duration-200"
                    preserveAspectRatio="none"
                    viewBox="0 0 246 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.18924 5.38553L9.86979 0.5H237.13L246.5 10.2801V76.7199L241.811 81.6145L237.13 86.5H9.86979L5.18924 81.6145L0.5 76.7199V10.2801L5.18924 5.38553Z"
                      fill="#FEA237"
                      style={{
                        fillOpacity:
                          selectedMeal?.title === meal.title ? 0.5 : 0.2,
                        strokeOpacity: 1,
                      }}
                      stroke="#FEA237"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="relative left-0 right-0 mx-auto"
                style={{
                  top: "50%",
                  width: "20%",
                  height: "2px",
                  backgroundImage:
                    "repeating-linear-gradient(to right, #FFEFD0, #FFEFD0 10px, transparent 10px, transparent 20px)",
                }}
              ></div>
              <h5 className="text-4xl font-semibold text-[#FFEFD0] text-right ">
                {meal.title}
              </h5>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Menulist;
