import { createSlice } from "@reduxjs/toolkit";
import { fetchCartData } from "../thunk/addToCartThunk";

export interface CartProduct {
  _id: string;
  imageUrl: string[];
  title: string;
  size: string;
  brand: string;
  name: string;
  price: string;
  stock: boolean;
}

export interface CartItem {
  product: CartProduct;
  quantity: number;
}

export interface CartState {
  value: {
    products: CartItem[];
    // Add other fields returned by your API if any
  };
  loading: boolean;
  error: null | { message: string };
}

const initialState: CartState = {
  value: {
    products: []
  },
  loading: false,
  error: null
};

const cartSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    clearCartError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload ? 
          { ...action.payload, products: [...action.payload.products] } : 
          { products: [] };
        state.error = null;
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          message: "Cart is empty"
        };
      });
  }
});

export const { clearCartError } = cartSlice.actions;
export default cartSlice.reducer;
