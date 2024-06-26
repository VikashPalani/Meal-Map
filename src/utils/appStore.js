import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore(
    {
        //This is the big reducer for our whole app
        reducer: {
            //These are the reducers for the different slices of the app
            cart: cartReducer,
            //Similarly we can add more reducers here
            //Eg: user: userReducer,
        }
    }
);

export default appStore;
