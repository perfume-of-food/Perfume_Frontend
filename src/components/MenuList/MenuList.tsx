import { useState } from 'react';

interface Meal {
    id: number;
    img: string;
    title: string;
}

interface MenuListProps {
    meals: Meal[];
}

const Menulist = ({ meals }: MenuListProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col items-start pl-5 py-12s pr-5 overflow-y-scroll h-full">
      {meals.map((meal, index) => (
        <div key={meal.id} className="w-full flex justify-between items-center">
          <div
            className="relative w-48 h-48 flex justify-center items-center"
            onMouseDown={() => setActiveIndex(index)}
            onMouseUp={() => setActiveIndex(null)}
            onTouchStart={() => setActiveIndex(index)}
            onTouchEnd={() => setActiveIndex(null)}
          >
            <img src={meal.img} alt="img" className="object-contain w-[92%] h-[92%] relative z-10" />
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
                  fill="#fea237"
                  style={{ fillOpacity: activeIndex === index ? 0.5 : 0.2, strokeOpacity: 1 }}
                  stroke="#fea237"
                />
              </svg>
            </div>
          </div>
          <h5 className="text-4xl font-semibold text-white text-right w-1/2">{meal.title}</h5>
        </div>
      ))}
    </div>
  );
};

export default Menulist;
