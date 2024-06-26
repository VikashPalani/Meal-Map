import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    //name,initialState,reducers are the configs of the cartSlice
    name: "cart", //This is the name of the slice
    initialState: {
        items: [],
    },
    reducers: {
        //These are the reducer functions which maps to an action
        addItem: (state,action) => {
            //We are mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
            // This make the array "items" empty []
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;