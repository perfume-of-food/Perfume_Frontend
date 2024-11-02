interface MealDescriptionProps {
    description: string | null;
}

const MealDescription = ({ description }: MealDescriptionProps) => {
    return (
        <div className="meal-description flex center items-center p-12 text-[#FFEFD0] text-3xl font-dot h-full w-full">
            {description ? (
                <p>{description}</p>
            ) : (
                <p>アイコンをタップして、好きな食べ物を選んでください</p>
            )}
        </div>
    );
};

export default MealDescription;
