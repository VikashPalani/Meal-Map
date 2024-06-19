import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {

    const{resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null){
        return <Shimmer /> ;
    };

    const {name,cuisines,costForTwoMessage,avgRating,totalRatingsString} =
        resInfo?.data?.cards[2]?.card?.card?.info;

    const{itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwoMessage} - {avgRating} stars</p>
            <p>{totalRatingsString}</p>
            <ol>
                {itemCards.map(item => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} -
                         ₹{item.card.info.price/100}</li>))}
            </ol>
        </div>
    )
}

export default RestaurantMenu;