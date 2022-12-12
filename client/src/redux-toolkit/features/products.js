import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url_API } from "../../config";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getProducts", async (payload) => {
    let res = await axios.get(`${url_API}/products`);
    return res.data;
})

const initialState = {
    products:[]
}

const products = createSlice({
    name: "products",
    initialState,
    reducers: {

    },

    extraReducers: {
        [getProducts.pending]: (state, action) => {

        },

        [getProducts.fulfilled]: (state, action) => {
            state.products = action.payload
        },

        [getProducts.rejected]: () => {

        },
    }
})

export default products.reducer;