import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productLoading } from "../Slices/productSlice";
 
export const fetchAll = createAsyncThunk('products/fetchAll',async (_,thunkAPI)=>{
    thunkAPI.dispatch(productLoading(true))
    const res =  await axios.get('https://fakestoreapi.com/products')
    thunkAPI.dispatch(productLoading(false))
    return res.data
})

export const fetchOne = createAsyncThunk('products/fetchOne',async (id,thunkAPI)=>{
    thunkAPI.dispatch(productLoading(true)) 
    const res =  await axios.get(`https://fakestoreapi.com/products/${id}`)
    thunkAPI.dispatch(productLoading(false))
    return res.data
})