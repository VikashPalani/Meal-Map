import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item));
    }

    return( 
    <div>
        {/* Items */}
        {items?.map((item) => (
            <div 
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
            >
                <div className="w-10/12">
                    <div className="py-2">
                        <span className="font-medium text-[18px]">{item?.card?.info?.name} </span>
                        <span className="font-normal">  -  ₹ {item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}</span>
                    </div>
                    <p className="text-md my-3">{item?.card?.info?.description}</p>
                    <div className="flex items-center">
                        <span className="text-md my-3 mr-3">{item?.card?.info?.ratings?.aggregatedRating?.rating} ★</span>
                        <button className="p-3 w-[80px] h-[40px] flex items-center justify-center bg-black text-white shadow-lg rounded-md"
                            //We are using a callback function here instead directly calling {handleAddItem(item)}
                            onClick = {() => handleAddItem(item)}
                        >
                            Add +
                        </button>
                    </div>

                </div>

                <div>
                    <img src = {CDN_URL + item?.card?.info?.imageId} className="w-[150px] h-[150px] rounded-lg"/>
                </div>
            </div>
        ))}
    </div>
    );
}

export default ItemList;