import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slices/CartSlice";
import productsReducer from '../Slices/productSlice'

export const store = configureStore({
    reducer: {
        cart : cartReducer,
        products: productsReducer
    }
})