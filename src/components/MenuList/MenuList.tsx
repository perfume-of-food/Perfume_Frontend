import { useState, useRef } from 'react';

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
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollThumbPosition, setScrollThumbPosition] = useState(0);

    const handleScroll = () => {
        const container = containerRef.current;
        if (container) {
            const thumbHeight = 30; // 滑块高度
            const maxThumbPosition = container.clientHeight - thumbHeight; // 滑块最大移动距离
            const scrollRatio = container.scrollTop / (container.scrollHeight - container.clientHeight);
            setScrollThumbPosition(scrollRatio * maxThumbPosition);
        }
    };

    return (
        <div className="relative w-full h-full overflow-x-hidden">
            <div
                className="relative px-5 py-2 overflow-y-scroll h-full"
                onScroll={handleScroll}
                ref={containerRef}
            >
                {/* 放食物图片，虚线，和字的框 */}
                {meals.map((meal, index) => (
                    <div key={meal.id} className="w-full flex justify-between items-center">
                        {/* 放svg和食物图片的框 */}
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
                        {/* 中间的虚线 */}
                        <div
                            className="relative left-0 right-0 mx-auto"
                            style={{
                                top: '50%',
                                width: '20%',
                                height: '2px',
                                backgroundImage: 'repeating-linear-gradient(to right, #FFEFD0, #FFEFD0 10px, transparent 10px, transparent 20px)',
                            }}
                        ></div>
                        <h5 className="text-4xl font-semibold text-white text-right ">{meal.title}</h5>
                    </div>
                ))}

                {/* 滚动条滑块 */}
                <div
                    className="absolute top-0 right-0 w-4 rounded-full bg-[#fea237] border border-[#fea237]"
                    style={{
                        height: '120px',
                        transform: `translateY(${scrollThumbPosition}px)`,
                        backgroundColor: 'rgba(254, 162, 55, 0.2)',
                    }}
                />
            </div>
        </div>
    );
};

export default Menulist;
