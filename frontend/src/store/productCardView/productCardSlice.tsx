import { createSlice } from "@reduxjs/toolkit";

const productCardSlice = createSlice({
    name:'productDetailView',
    initialState:{
        data: [],
        selectedProduct: null
    },
    reducers:{
        setProduct: (state, action)=>{
            state.data = action.payload
        },
        selectProduct: (state, action)=>{
            state.selectedProduct = action.payload
        }
    }
})

export const { setProduct, selectProduct } = productCardSlice.actions;
export default productCardSlice.reducer;