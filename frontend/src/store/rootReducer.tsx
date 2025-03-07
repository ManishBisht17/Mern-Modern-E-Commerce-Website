import { combineReducers } from "@reduxjs/toolkit";
import cartProductReducer from "./addToCart/slice/cartProductSlice";
import productCardReducer from "./productCardView/productCardSlice";

const rootReducer = combineReducers({
  cartProducts: cartProductReducer,
  productDetailView: productCardReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
