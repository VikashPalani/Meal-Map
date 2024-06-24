import { useState } from "react";
import SubCategoryList from "./SubCategoryList";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    const [showItems, setShowItems] = useState({});

    const handleSubCategoryClick = (categoryTitle) => {
        setShowItems(prevState => ({
            ...prevState,
            [categoryTitle]: !prevState[categoryTitle]
        }));
    };

    return (
        <div>
            <div className="w-10/12 mx-auto mt-4 mb-10 bg-gray-100 shadow-sm p-4">
                <div className="flex justify-between">
                    <span className="text-xl font-bold mb-6">
                        {data?.title}
                    </span>
                </div>
                {data?.categories.map((category) => (
                    <div key={category.title}>
                        <SubCategoryList 
                            subCategory={category}
                            onSubCategoryClick={() => handleSubCategoryClick(category.title)}
                        />
                        {showItems[category.title] && <ItemList items={category?.itemCards} />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantCategory;
