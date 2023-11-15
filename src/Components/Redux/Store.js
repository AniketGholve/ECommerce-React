import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";

let Store=configureStore(
    {
        reducer:{
            ECommerce:Slice
        }
    }
)

export default Store;