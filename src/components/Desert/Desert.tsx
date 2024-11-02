import { useState } from 'react';
import Header from '@//components/Header/Header';
import Menulist from "@//components/MenuList/MenuList";
import { MenuData } from "@//data/MenuData";

const Desert = () => {
    const [selectedCategory, setSelectedCategory] = useState('デザート');
    const filteredMeals = MenuData.filter((meal) => meal.category === selectedCategory);

    return (
        <div>
            <Header onCategorySelect={setSelectedCategory} />
            <Menulist meals={filteredMeals} />
        </div>
    );
};

export default Desert;
