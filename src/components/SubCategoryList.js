const SubCategoryList = ({subCategory}) => {

    const handleClick = () => {
        console.log("Clicked");
    }

    return( 
    <div>
        {/* Sub Categories */}
        <div 
        className="w-12/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="text-xl font-semibold">
                    {subCategory.title} ({subCategory.itemCards.length})
                </span>
                <span className="text-2xl">↓</span>
            </div>
        </div>
    </div>
    );
}

export default SubCategoryList;