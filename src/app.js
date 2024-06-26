import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Offline from "./components/Offline";
import Cart from "./components/Cart";

import UserContext from "./utils/UserContext";
import { useState, useEffect } from "react";
import {Provider} from "react-redux"; //This is like a bridge between react app and redux
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

    const[userName,setUserName] = useState();

    //authenticating the user
    useEffect(() => {
        //Make an API call and send username and other details
        const data = {
            name: "Vikash",
        };
        setUserName(data.name);
    }, []);

    return(
        <Provider store={appStore}>
            <UserContext.Provider value = {{loggedInUser: userName, setUserName}}>
            <div className = "app">
                <Header />
                <Outlet /> {/** Outlet will be filled with the childeren according to the path */}
            </div>
            </UserContext.Provider>
        </Provider>
    );
};

//There are two types of routing in Web apps:
    //1. client side routing (No Network calls are made)[We are using this]
    //2. Server side routing

//This is the Configuration for Routing to different pages
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path:"/",
                element:<Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback = {<h1>Loading...</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/offline",
                element: <Offline />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);