import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list : new Set(),
    counter : 0,
}

const CartListSlice = createSlice({
    name: 'CartList',
    initialState,
    reducers: {
        addProduct: (state,action)=>{
            const existed = [...state.list].find((product)=>product.id === action.payload.id)
            if (existed) {
                state.list.delete(existed)
                state.list.add({...action.payload,units: action.payload.units + existed.units})
            }else{
                state.list.add(action.payload)
                state.counter += 1
            }
        },
        delProduct: (state,action)=>{
            const existed = [...state.list].find((product)=>product.id === action.payload.id)
            if (action.payload.units === 0) {
                state.list.delete(existed)
                state.counter -= 1
            }else{
                state.list.delete(existed)
                state.list.add(action.payload)

            }

        }
    },
})

export const { addProduct , delProduct } = CartListSlice.actions
export default CartListSlice.reducer