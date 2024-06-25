import { FaChevronDown } from "react-icons/fa";

const SubCategoryList = ({ subCategory, onSubCategoryClick }) => {
    return (
        <div>
            <div className="w-12/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={onSubCategoryClick}>
                    <span className="text-xl font-semibold">
                        {subCategory.title} ({subCategory.itemCards.length})
                    </span>
                    <span className="text-xl"><FaChevronDown /></span>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryList;
