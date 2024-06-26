import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import {useState,useEffect,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

//let resList; this is the method of creating Normal JS variable.

const Body = () => {

    //Local State variable - super powerful variable
    //Always create and call useState hooks inside a component and not outsie it (Error is occur)

    //useState is used to create local state variables inside the functional components
    const[listOfRestaurants, setListOfRestaurants] = useState([]); // This the method of creating state variable
    const[filteredRestaurant, setFilteredRestaurant] = useState([]);
    const[searchText,setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const promoted = "and"

    // console.log("Body Rendered");
    
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

        // console.log(json);

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

    const{loggedInUser,setUserName} = useContext(UserContext);

    //Conditional Rendering using ternary operator

    return (listOfRestaurants&&listOfRestaurants.length === 0)? <Shimmer /> : (

        <div className="body">
            <div className="filter flex justify-between">

                <div className="search m-1 pl-1 p-4">
                    <input
                        type ="text"
                        className="m-4 border border-solid border-black rounded-md"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className="px-4 py-2 bg-gray-700 text-white mx-2 my-4 rounded-lg " onClick={
                        () => {
                            console.log(searchText);
                            //Filter the restaurant cards and update the UI

                            const filteredRestaurant = listOfRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                            setFilteredRestaurant(filteredRestaurant);
                            
                            
                        }
                    } 
                    >
                        Search
                    </button>
                </div>
                <div className="search my-4 mx-2 p-5 flex justify-items-center">
                    <button 
                        className="px-4 py-2 bg-gray-700 text-white rounded-lg"
                        onClick={() => {
                            const filterLogic = listOfRestaurants.filter(
                                (res) => res.info.avgRating >= 4.5
                            );
                            setListOfRestaurants(filterLogic)
                            console.log("Button Clicked");
                        }}
                        >
                        Top Rated Restaurants
                    </button>
                </div>

                <div className="search m-4 p-4 flex items-center">
                    <label>Username : </label>
                    <input
                        className="m-2 p-2 border border-solid border-black rounded-md"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>

            </div>

            <div className="flex flex-wrap">            
                {filteredRestaurant&&filteredRestaurant.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to= {"/restaurants/" + restaurant.info.id}
                    >
                        {
                            restaurant.info.name.toLowerCase().includes(promoted.toLowerCase()) ? (<RestaurantCardPromoted resData={restaurant}/>)
                            : (<RestaurantCard resData = {restaurant} />)
                        }
                    </Link>
                ))}
            </div>

        </div>
    );
};

//Not using keys in mapping(not acceptable)<<<< Using index as keys <<<<<<<<<<<<<< Using unique id for each data (Best practice)

export default Body;