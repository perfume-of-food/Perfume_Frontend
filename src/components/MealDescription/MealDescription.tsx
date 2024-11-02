interface MealDescriptionProps {
    description: string | null;
}

const MealDescription = ({ description }: MealDescriptionProps) => {
    return (
        <div className="meal-description flex center items-center p-12 text-[#FFEFD0] text-3xl font-dot h-full w-full">
            {description ? (
                <p>{description}</p>
            ) : (
                <p>点击食物图片查看描述</p>
            )}
        </div>
    );
};

export default MealDescription;
