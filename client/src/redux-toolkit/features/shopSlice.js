import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url_API } from "../../config";
import axios from "axios";

export const loadProducts = createAsyncThunk("shop/loadProducts", async (payload) => {
    let searchData = payload.searchData ? `&title_like=${payload.searchData}` : "";
    let res = await axios.get(`${url_API}/products?_page=${payload.curPage}&_limit=${payload.ItemsPerPage}${searchData}`);
    return [res.data, res.headers["x-total-count"]]
})

const initialState = {
    products: [],
    searchData: "",
    loading: false,
    err: null,
    maxNumOfitems: 0,
    ItemsPerPage: 10,
    curPage: 1,
    timer: null
}

const shopSlice = createSlice({
    name: "shopSlice",
    initialState,
    reducers: {
        filterProducts: (state, action) => {
            if (action.payload === "") state.filteredProducts = null
            else state.filteredProducts = state.products.filter((product) => {
                return product.title.trim().toLowerCase().includes(action.payload.toLowerCase().trim());
            })
        },

        changeItemsPerPage: (state, action) => {
            state.ItemsPerPage = action.payload
        },

        setCurPage: (state, action) => {
            state.curPage = action.payload
        },

        setSearchData: (state, action) => {
            if (state.searchData === "") state.curPage = 1;
            state.searchData = action.payload
        },

        setTimer: (state, action) => {
            state.timer = action.payload
        }
    },

    extraReducers: {
        [loadProducts.pending]: (state, action) => {
            state.loading = true;
        },

        [loadProducts.fulfilled]: (state, action) => {
            state.products = action.payload[0];
            state.maxNumOfitems = action.payload[1];
            state.loading = false;
        },

        [loadProducts.rejected]: (state, action) => {
            state.loading = false;
        },
    }
})

export const { filterProducts, changeItemsPerPage, setCurPage, setSearchData, setTimer } = shopSlice.actions;
export default shopSlice.reducer;