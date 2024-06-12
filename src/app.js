import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => {
    return(
        <div className = "app">
            <Header />
            <Outlet /> {/** Outlet will be filled with the childeren according to the path */}
        </div>
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
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);