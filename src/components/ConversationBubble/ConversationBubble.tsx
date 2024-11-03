export const ConversationBubble = () => {
    return (
        <div className="relative w-[247px] h-[269px]">
            <svg 
                width="247" 
                height="269" 
                viewBox="0 0 247 269" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0"
            >
                <path 
                    d="M237.344 0H9.65638L0 25.8354V197.165L9.65638 223H173L187.289 268.75L201.579 223H237.344L247 197.165V25.8354L237.344 0Z"
                    stroke="#FEA237" 
                    fill="#FEA237" 
                    fillOpacity="0.2" 
                />
            </svg>

            <div className="absolute inset-0 flex flex-col justify-center items-start px-4 mt-[-60px]">
                <span className="text-beige font-dot text-xl">
                    嗯，很有意思的选择，仿佛能透过屏幕看到你的表情。
                </span>
                <span className="text-beige font-dot text-xl">
                    （测试用的临时台词，之后改）
                </span>
            </div>
        </div>
    );
};
