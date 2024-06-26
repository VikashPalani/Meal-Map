import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <div className="text-center m-7 p-7">
            <div className="w-8/12 mx-auto flex items-center justify-between mb-10">
                <h1 className="text-2xl font-bold underline">Cart</h1>
                <button 
                    className="p-2 m-2 bg-black text-white rounded-md"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            </div>
            <div className="w-8/12 m-auto bg-gray-100 rounded-lg">
                {cartItems.length === 0 && (
                    <h1 className="font-medium text-lg"> Cart is Empty. Add Items to the cart</h1>
                )}
                <ItemList items={cartItems}/>
            </div>
        </div>
    );
};

export default Cart;