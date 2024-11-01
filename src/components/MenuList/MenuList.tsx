import { useState } from 'react';
import './MenuList.css';

interface Meal {
    id: number;
    img: string;
    title: string;
}

interface MenuListProps {
    meals: Meal[];
}



const Menulist = ({ meals }:MenuListProps) => {
  console.log("Meals in Menulist:", meals);
  const [activeIndex, setActiveIndex] = useState< number | null> (null);
  
  return (
    <div className="meal-container flex flex-col items-start p-4 overflow-y-scroll h-full">
      {meals.map((meal, index) => (
        <div key={meal.id} className="w-full flex justify-between items-center">
          <div className="img-container relative w-45 h-45 flex justify-center items-center">
            <img src={meal.img} alt="img" className="object-contain w-full h-full" />
            <div
              className={`svg-overlay absolute ${activeIndex === index ? 'active' : ''}`}
              onMouseDown={() => setActiveIndex(index)}
              onMouseUp={() => setActiveIndex(null)}
            >
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 246 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.18924 5.38553L9.86979 0.5H237.13L246.5 10.2801V76.7199L241.811 81.6145L237.13 86.5H9.86979L5.18924 81.6145L0.5 76.7199V10.2801L5.18924 5.38553Z"
                  className="svg-path"
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

export default Menulist