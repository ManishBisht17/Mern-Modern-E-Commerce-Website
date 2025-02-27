import { createSlice } from "@reduxjs/toolkit";
import { fetchCartData } from "../thunk/addToCartThunk";

// need a thunk here wich will call the data form the backend of cart

export type product = {
    name:string;
    price:number;
    size:string;
    image:string;
}
export interface cartType {
    value: product[];
    loading: boolean;
    error: null|{message:string}
}
const initialState:cartType = {
        value: [], // array[] of what
        loading: false,
        error: null
}

const createProductSlice = createSlice({
    name:"cartProducts",
    initialState : initialState ,
    reducers : {} ,
    extraReducers: ( builder )=>{
        builder
        .addCase(fetchCartData.pending, (state)=> { state.loading = true })
        .addCase(fetchCartData.fulfilled, ( state, action )=> { 
            state.loading=false 
            state.value = action.payload
        })
        .addCase(fetchCartData.rejected, (state)=> {
            state.loading= false 
            state.error = { 
                message:"not data found"
            }
        } 
    )}
})

export default createProductSlice.reducer;