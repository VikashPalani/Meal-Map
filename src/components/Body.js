import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";

//let resList; this is the method of creating Normal JS variable.

const Body = () => {

    //Local State variable - super powerful variable
    const[listOfRestaurants, setListOfRestaurants] = useState(resList); // This the method of creating state variable
    return(
        <div className="body">

            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating >= 4
                        );
                        setListOfRestaurants(filteredList)
                        console.log("Button Clicked");
                    }}
                    >
                      Top Rated Restaurants
                </button>
            </div>

            <div className="res-container">            
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>

        </div>
    );
};

//Not using keys in mapping(not acceptable)<<<< Using index as keys <<<<<<<<<<<<<< Using unique id for each data (Best practice)

export default Body;