import { useState } from "react";
import { NavLink } from "react-router-dom";

const mealsData = [
    {
        title: 'おすすめ',
        link: '/',
    },
    {
        title: 'デザート',
        link: '/desert',
    },
    {
        title: '飲み物',
        link: '/drink',
    },
    {
        title: 'おつまみ',
        link: '/snacks',
    },
    {
        title: 'その他',
        link: '/others',
    },
];

interface HeaderProps {
    onCategorySelect: (category: string) => void;
}

const Header = ({ onCategorySelect }: HeaderProps) => {
    const [navs] = useState(mealsData);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);


    return (
        <ul className="flex w-full h-full justify-center pt-10"
        >
            {navs.map((nav, index) => (
                <li key={index} className="relative flex w-[180px] h-full"
                    onMouseDown={() => setActiveIndex(index)}
                    onMouseUp={() => setActiveIndex(null)}
                    onTouchStart={() => setActiveIndex(index)}
                    onTouchEnd={() => setActiveIndex(null)}
                >
                    <NavLink
                        to={nav.link}
                        onClick={() => onCategorySelect(nav.title)}
                        className="text-white [-webkit-text-stroke:_0.6px_#FEA237;] [paint-order:stroke fill] text-3xl font-serif text-center relative z-10 w-full h-full flex items-center justify-center"
                    >
                        {nav.title}
                    </NavLink>
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
                            style={{ fillOpacity: activeIndex === index ? 0.5 : 0.2, strokeOpacity: 1 }}
                            stroke="#FEA237"
                        />
                    </svg>
                </li>
            ))}
        </ul>
    );
}

export default Header;
