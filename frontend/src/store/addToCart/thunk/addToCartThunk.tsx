import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCartData = createAsyncThunk('cardProducts/fetchCartData', async(_,{rejectWithValue}) => {
    try{
        const data = await axios.get('');
        return data.data
    }catch(error){  
        return rejectWithValue('')
    }
})