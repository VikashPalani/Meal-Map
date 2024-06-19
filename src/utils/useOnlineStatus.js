import { useEffect, useState } from "react";

const UseOnlineStatus = () => {
    const[onlineStatus,setOnlineStatus]= useState(true);

    //check if online
    useEffect(() =>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        });

        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });
        
    },[]);

    //onlineStatus is a boolean value
    return onlineStatus;
}

export default UseOnlineStatus;

//we are using a event listener for this.