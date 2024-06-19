import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";

//let resList; this is the method of creating Normal JS variable.

const Body = () => {

    //Local State variable - super powerful variable
    //Always create and call useState hooks inside a component and not outsie it (Error is occur)

    //useState is used to create local state variables inside the functional components
    const[listOfRestaurants, setListOfRestaurants] = useState([]); // This the method of creating state variable
    const[filteredRestaurant, setFilteredRestaurant] = useState([]);
    const[searchText,setSearchText] = useState("");

    console.log("Body Rendered");
    
    //useEffect() has two arguments, callback function and a dependency array(Optional)
    //useEffect is called after every render of that component (Dependency array will change the rendering cycle)
    //if dependency array id empty = [] => useEffect is called on the initial render(just once)
    //if dependency array contains something inside it => useEffect is called everytime when the elements inside it updates.

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
        //This step is the destructing of Data
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = UseOnlineStatus();
    if(onlineStatus===false){
        return(
            <h2>
                Looks like you're offline!! Please check your internet connection.
            </h2>
        )
    }

    //Conditional Rendering using ternary operator

    return (listOfRestaurants&&listOfRestaurants.length === 0)? <Shimmer /> : (

        <div className="body">
            <div className="filter">

                <div className="search">
                    <input
                        type ="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className="searchBtn" onClick={
                        () => {
                            console.log(searchText);
                            //Filter the restaurant cards and update the UI

                            const filteredRestaurant = listOfRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                            setFilteredRestaurant(filteredRestaurant);
                            
                            
                        }
                    } 
                    >Search</button>
                </div>

                <button 
                    className="filter-btn"
                    onClick={() => {
                        const filterLogic = listOfRestaurants.filter(
                            (res) => res.info.avgRating >= 4
                        );
                        setListOfRestaurants(filterLogic)
                        console.log("Button Clicked");
                    }}
                    >
                      Top Rated Restaurants
                </button>
            </div>

            <div className="res-container">            
                {filteredRestaurant&&filteredRestaurant.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to= {"/restaurants/" + restaurant.info.id}
                    >
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>

        </div>
    );
};

//Not using keys in mapping(not acceptable)<<<< Using index as keys <<<<<<<<<<<<<< Using unique id for each data (Best practice)

export default Body;