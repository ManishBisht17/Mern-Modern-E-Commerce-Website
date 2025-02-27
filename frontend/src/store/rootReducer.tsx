import { combineReducers } from "@reduxjs/toolkit";
import cartProductReducer from './addToCart/slice/cartProductSlice'

const rootReducer = combineReducers({
    cartProducts: cartProductReducer
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;

