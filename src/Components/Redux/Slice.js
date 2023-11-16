import { createSlice } from "@reduxjs/toolkit";
import data from "../Data/Data";

let Slice = createSlice({
    name: "ECommerce",
    initialState: {
        storeData: data,
        cartData: [],
        loggedUser: null
    },
    reducers: {
        addToCart: (state, action) => {
            let payload = action.payload;
            let data = { ...payload, quantity: 1 }
            let cartData = JSON.parse(localStorage.getItem("cartData")) ?? [];
            let count = 0
            for (let item of cartData) {
                if (item.name === data.name) {
                    item["quantity"] += 1;
                    count = 1;
                }
            }
            if (count === 0) {
                cartData.push(data)
            }
            localStorage.setItem("cartData", JSON.stringify(cartData))
        },
        getCartData: (state, action) => {
            state.cartData = JSON.parse(localStorage.getItem("cartData")) ?? [];
        },
        removeFromCart: (state, action) => {
            let data = action.payload;
            let cartData = JSON.parse(localStorage.getItem("cartData")) ?? [];
            for (let i = 0; i < cartData.length; i++) {
                if (cartData[i].name === data.name) {
                    if (cartData[i].quantity <= 1) {
                        cartData.splice(i, 1)
                    }
                    else {
                        cartData[i].quantity -= 1;
                    }
                }
            }

            localStorage.setItem("cartData", JSON.stringify(cartData))
        },
        getLoggedUser: (state, action) => {
            state.loggedUser = localStorage.getItem("loggedUser") ?? null
        }
    }
})

export const { addToCart, getCartData, removeFromCart, getLoggedUser } = Slice.actions
export default Slice.reducer;