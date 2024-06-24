import SubCategoryList from "./SubCategoryList";
import ItemList from "./ItemList";

const RestaurantCategory = (data) => {
// console.log(data);

    return(
        <div>
            {/** Header */}
            <div className="w-8/12 mx-auto mt-4 mb-10 bg-gray-50 shadow-sm p-4">
                <div className="flex justify-between">
                    <span className="text-xl font-bold">
                        {data?.data?.title}
                    </span>
                    {/* <span className="text-2xl">↓</span> */}
                </div>
                {/** Accordion Body */}

                {data?.data?.categories.map((category) => (
                    <div key= {category.title}>
                        <SubCategoryList subCategory={category}/>
                        <ItemList items={category?.itemCards}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RestaurantCategory;