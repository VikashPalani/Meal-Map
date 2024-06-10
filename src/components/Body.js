import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";

//let resList; this is the method of creating Normal JS variable.

const Body = () => {

    //Local State variable - super powerful variable
    const[listOfRestaurants, setListOfRestaurants] = useState([]); // This the method of creating state variable

    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1388554&lng=80.1092932&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        // Check console for obtaining the proper data path from the API instead of opening the API in new tab. For this first console.log the json file.

        const json = await data.json();

        console.log(json);

        //Optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(listOfRestaurants.length === 0){
        return <Shimmer />;
    }


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