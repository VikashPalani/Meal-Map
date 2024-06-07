import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return(
        <div className="body">

            <div className="search">
                Search
            </div>

            <div className="res-container">            
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>

        </div>
    );
};

//Not using keys in mapping(not acceptable)<<<< Using index as keys <<<<<<<<<<<<<< Using unique id for each data (Best practice)

export default Body;