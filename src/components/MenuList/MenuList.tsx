import { foodList } from "@/constants/foodConstants";
import { FoodCategory } from "@/types/Mood";
import { useMoodMenuStore } from "@/stores/useMoodMenuStore";
import { useGameManagerStore } from "@/stores/useGameManagerStore";
import { useMoodPanelStore } from "@/stores/useMoodPanelStore";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const MenuList = () => {
  const {
    selectedCategory,
    selectedFood,
    setselectedFood,
    getRecommendedFoods,
  } = useMoodMenuStore();
  const { selectedMoodItem } = useMoodPanelStore();
  const { getPrimaryMoodItem } = useGameManagerStore();

  const baseMoodItem = selectedMoodItem ?? getPrimaryMoodItem();

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const displayFoods =
    selectedCategory === FoodCategory.RECOMMENDED
      ? getRecommendedFoods(baseMoodItem)
      : foodList.filter((food) => food.category === selectedCategory);

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;

    if (!container || !scroll) return;

    if (
      [FoodCategory.OTHER, FoodCategory.RECOMMENDED].includes(selectedCategory)
    ) {
      scroll.style.opacity = "0";
    } else {
      scroll.style.opacity = "1";
    }

    gsap.to(container, {
      scrollTop: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(scroll, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [selectedCategory]);

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;

    if (!container || !scroll) return;

    const updateScroll = () => {
      const containerHeight = container.clientHeight;
      const scrollHeight = container.scrollHeight;
      const scrollTop = container.scrollTop;

      const scrollProgress = scrollTop / (scrollHeight - containerHeight);
      const maxY = containerHeight - scroll.clientHeight;

      gsap.to(scroll, {
        y: maxY * scrollProgress,
        duration: 0,
      });
    };

    container.addEventListener("scroll", updateScroll);

    return () => {
      container.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-x-hidden">
      <div
        ref={scrollRef}
        className="absolute top-0 right-[2px] w-4 h-40 rounded-full border-[1px] border-orange bg-orange bg-opacity-20 opacity-0"
      ></div>

      <div
        ref={containerRef}
        className="relative pl-5 pr-6 py-2 overflow-y-scroll h-full hidden-scrollbar"
      >
        {displayFoods.map((food) => (
          <div
            key={food.id}
            className="w-full flex justify-between items-center"
          >
            <div
              className="relative w-48 h-48 flex justify-center items-center"
              onClick={() => {
                setselectedFood(food.description, food.title);
              }}
            >
              <img
                src={food.img}
                alt="img"
                className="object-contain w-[92%] h-[92%] relative z-10"
              />
              <div className="absolute top-1/2 transform -translate-y-1/2 h-1/3 flex justify-center items-center">
                <svg
                  className="w-full h-full transition-opacity duration-200"
                  preserveAspectRatio="none"
                  viewBox="0 0 247 87"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.18924 5.38553L9.86979 0.5H237.13L246.5 10.2801V76.7199L241.811 81.6145L237.13 86.5H9.86979L5.18924 81.6145L0.5 76.7199V10.2801L5.18924 5.38553Z"
                    fill="#FEA237"
                    style={{
                      fillOpacity:
                        selectedFood?.title === food.title ? 0.5 : 0.2,
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
            <span
              className="font-dot text-3xl text-beige text-right"
              onClick={() => {
                setselectedFood(food.description, food.title);
              }}
            >
              {food.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
