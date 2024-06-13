import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const[resInfo, setResInfo] = useState(null);
    const{resId} = useParams();

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);

        setResInfo(json);
    };

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