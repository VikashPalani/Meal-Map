import SubCategoryList from "./SubCategoryList";
import ItemList from "./ItemList";

const RestaurantCategory = (data) => {
console.log(data);

    return(
        <div>
            {/** Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
                <span className="text-xl font-semibold">{data?.data.title} ({data?.data?.categories[0]?.itemCards?.length})</span>
                <span className="text-2xl">↓</span>
            </div>
            {/** Accordion Body */}
            <SubCategoryList subCategory={data?.data?.categories}/>
            <ItemList items={data?.data?.categories?.itemCards}/>
        </div>
    )
}

export default RestaurantCategory;