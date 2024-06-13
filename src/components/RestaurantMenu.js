import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const[resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.1386756&lng=80.1097984&restaurantId=65727&catalog_qa=undefined&submitAction=ENTER"
        );
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
            <ul>
                {itemCards.map(item => <li>{item.card.info.name} - ₹{item.card.info.price/100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;