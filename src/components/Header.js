import { LOGO_IMG, LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";

//Link component works exactly like an anchor tag for React

const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = UseOnlineStatus();

    return(
        <div className = " h-[150px] flex justify-between mb-2 bg-slate-400 shadow-lg">
            <div className="logo-container">
                <img                
                    className = " m-2 p-2 w-[180px] h-[13S0px]"
                    src = {LOGO_IMG}
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 font-semibold text-lg">
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
                    {/* <li className="px-4">
                        <Link to = "/cart">Cart</Link>
                    </li> */}
                    <li className="px-4">
                        {onlineStatus?"✅":"🔴"}
                    </li>
                    <button 
                        className= "className= px-4 bg-gray-700 rounded-lg h-10 text-white font-normal justify-items-center"
                        onClick={() => {
                            btnName === "Login" 
                            ? setBtnName("Logout")
                            : setBtnName("Login");
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;