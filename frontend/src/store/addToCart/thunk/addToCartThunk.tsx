import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../../../config";

export const fetchCartData = createAsyncThunk('cardProducts/fetchCartData', async(token, {rejectWithValue}) => {
    try {
        const res = await axios.get(`${BaseUrl}/product/getUserCart`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        
        // Return the data with a check if it's empty
        return res.data;
    } catch (error) {  
        return rejectWithValue(error?.message);
    }
});