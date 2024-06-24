import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {

    const{resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null){
        return <Shimmer /> ;
    };

    const {name,cuisines,costForTwoMessage,avgRating,totalRatingsString} =
        resInfo?.data?.cards[2]?.card?.card?.info;

    const{itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = 
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            c => c.card?.card?.["@type"] ===
             "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
    // console.log(categories);

    return(
        <div className="text-center">
            <h1 className="font-bold mt-10 mb-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {avgRating} stars</p>
            <p className="font-bold text-lg mb-10">{costForTwoMessage} - {totalRatingsString}</p>

            {/* Categories Accordion*/}
            {categories.map((category) => (
                <div key= {category.title}>
                    <RestaurantCategory data={category?.card?.card}/>
                </div>
            ))};
        </div>
    )
}

export default RestaurantMenu;