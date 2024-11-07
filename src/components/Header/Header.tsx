import { useMoodMenuStore } from "@/stores/useMoodMenuStore";
import { FoodCategory } from "@/types/Mood";

const foodCategories = [
  { title: FoodCategory.RECOMMENDED },
  { title: FoodCategory.DESSERT },
  { title: FoodCategory.BEVERAGE },
  { title: FoodCategory.DISH },
  { title: FoodCategory.OTHER },
];

const Header = () => {
  const { selectedCategory, setSelectedCategory } = useMoodMenuStore();

  return (
    <ul className="flex w-full h-full justify-center pt-10">
      {foodCategories.map((category, index) => (
        <li key={index} className="relative flex w-[180px] h-full">
          <button
            onClick={() => setSelectedCategory(category.title)}
            style={
              {
                opacity: category.title === selectedCategory ? 1 : 0.6,
              }
            }
            className="text-white [-webkit-text-stroke:_0.6px_#FEA237;] [paint-order:stroke fill] text-3xl font-serif text-center relative z-10 w-full h-full flex items-center justify-center"
          >
            {category.title}
          </button>
          <svg
            className="absolute inset-0 w-full h-full z-0"
            preserveAspectRatio="none"
            viewBox="0 0 247 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.18924 5.38553L9.86979 0.5H237.13L246.5 10.2801V76.7199L241.811 81.6145L237.13 86.5H9.86979L5.18924 81.6145L0.5 76.7199V10.2801L5.18924 5.38553Z"
              fill="#FEA237"
              stroke="#FEA237"
              strokeWidth="1"
              style={{
                fillOpacity: category.title === selectedCategory ? 0.5 : 0.2,
                strokeOpacity: category.title === selectedCategory ? 1 : 0.5,
                strokeWidth: category.title === selectedCategory ? 1 : 0.3,
              }}
            />
          </svg>
        </li>
      ))}
    </ul>
  );
};

export default Header;
