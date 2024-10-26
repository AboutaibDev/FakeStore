import { createSlice } from "@reduxjs/toolkit"
import { fetchAll,fetchOne } from "../Calls/apiCalls"

const initialState = {
    productsList : [],
    oneProduct: {},
    loading: true
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        productLoading : (state,action)=>{
            state.loading = action.payload
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchAll.fulfilled,(state,action)=>{
            state.productsList = action.payload
        })
        .addCase(fetchOne.fulfilled,(state,action)=>{
            state.oneProduct = action.payload
        })
    }
})

export const { productLoading } = productsSlice.actions
export default productsSlice.reducer