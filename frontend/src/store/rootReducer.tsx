import { combineReducers } from "@reduxjs/toolkit";
import carteProductReducer from './addToCart/slice/cartProductSlice'

const rootReducer = combineReducers({
    cardProducts: carteProductReducer
})

export default rootReducer;

