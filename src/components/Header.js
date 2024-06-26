import { LOGO_IMG, LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";

//Link component works exactly like an anchor tag for React

const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = UseOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    //We are subscribing to the cart slice of the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return(
        <div className = " h-[150px] flex justify-between mb-2 bg-slate-400 shadow-lg">
            <div className="logo-container">
                <img                
                    className = " m-2 p-2 w-[180px] h-[130px]"
                    src = {LOGO_IMG}
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 font-semibold text-lg">
                    <li className="px-4">
                        {onlineStatus?"✅":"🔴"}
                    </li>
                    <li className="px-4">
                        <Link to = "/">Home</Link>    
                    </li>
                    <li className="px-4">
                        <Link to = "/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to = "/contact">Contact Us</Link>
                    </li>
                    {/* <li className="px-4">
                        <Link to = "/grocery">Grocery</Link>
                    </li> */}
                    <button 
                        className= "className= px-4"
                        onClick={() => {
                            btnName === "Login" 
                            ? setBtnName("Logout")
                            : setBtnName("Login");
                        }}
                    >
                        {btnName}
                    </button>
                    <li className="px-4 font-bold">
                        {loggedInUser}
                    </li>
                    <li className="px-4 font-bold">
                        <Link to = "/cart" className="flex items-center"> 
                            <IoMdCart className=" text-2xl mr-2" /> ({cartItems.length})
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;