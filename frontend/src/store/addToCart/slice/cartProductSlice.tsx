import { createSlice } from "@reduxjs/toolkit";
import { fetchCartData } from "../thunk/addToCartThunk";

// need a thunk here wich will call the data form the backend of cart

export interface cartType {
    value: [];
    loading: boolean;
    error: null|{message:string}
}

const initialState:cartType = {
        value: [], // array[] of what
        loading: false,
        error: null
}

const createProductSlice = createSlice({
    name:"cardProducts",
    initialState : initialState ,
    reducers : {} ,
    extraReducers: ( builder )=>{
        builder
        .addCase(fetchCartData.pending, (state)=> { state.loading = true })
        .addCase(fetchCartData.fulfilled, ( state, action )=> { 
            state.value = action.payload, state.loading=false })
        .addCase(fetchCartData.rejected, (state)=> {
            state.error = {message:"not data found"} } 
    )
    }
})

export default createProductSlice.reducer;