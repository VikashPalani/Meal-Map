import { Link, useRouteError } from "react-router-dom";
import { ERROR } from "../utils/constants";

//useRouterError is used to get more information about the error

const Error = () =>{

    return(
        <div >
            <div className=" flex justify-center mt-[150px]">
                <img                
                    className = "w-[400px] h-[400px]"
                    src = {ERROR}
                />
            </div>
            <div className="flex justify-center">
                <p className="font-semibold italic text-2xl mb-4">We are sorry, but the page you are looking for does not exist.</p>
            </div>
                <p className="text-xl flex justify-center p-1">Please check entered address and try again or go to 
                <span><button className= "rounded-md mx-2 p-1 px-2 text-lg text-white bg-errorButton"><Link to = "/" >Homepage</Link></button></span>
                </p>
        </div>
    )
}

export default Error;