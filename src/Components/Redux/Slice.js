import { createSlice } from "@reduxjs/toolkit";
// import data from "../Data/Data";
import axios from "axios";
let data1=[];

async function getData() {
    await axios.get("http://localhost:3000/getData").then(res => data1 = res.data)
    return data1;
}
getData()

let Slice = createSlice({
    name: "ECommerce",
    initialState: {
        storeData: data1,
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
        getProducts:(state,action)=>{
            state.storeData=data1;
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

export const { addToCart, getCartData, removeFromCart, getLoggedUser ,getProducts} = Slice.actions
export default Slice.reducer;