import { CDN_URL } from "../utils/constants";

//We are building a seperate component for Restaurant Cards to make it modular (reusing it whenever required)
//resList is the JS List containing several objects in it and resData is the prop for the component RestaurantCard.
const RestaurantCard = (props) => {
    const {resData} = props;

    const{
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
    } = resData?.info;

    // This step is destructing of an object

    return(
        <div className="mx-2 my-4 p-3 w-[300px] h-[550px] bg-slate-200 rounded-lg hover:bg-slate-300">
            <img 
                className = "rounded-lg h-[300px] w-[280px]" 
                src = {CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="font-medium mb-2">{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{resData?.info?.sla?.deliveryTime} minutes</h4> 
            <h4>{costForTwo}</h4>
        </div>
    );
};

// The join() method returns an array as a string, and a seperator can be specified.

//Higher Order Component
//input - RestaurantCard ==> Output - RestaurantCardwithPromoted
// In our data we don't have the value for promoted so we will use "isOpen" instead of that.


export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black opacity-80 text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    }; 
};

// ...props is spread operator; It passes all the props to the < RestaurantCard />

export default RestaurantCard;