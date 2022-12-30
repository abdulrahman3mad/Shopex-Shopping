import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url_API } from "../../config";
import axios from "axios";

// loadProducts is an action creater that will run first the promise call back 
// and based on the returned promised state, will dispatch a the suitable promise action 
export const loadProducts = createAsyncThunk("shop/loadProducts", async (payload) => {
    let searchData = payload.searchData ? `&title_like=${payload.searchData}` : "";
    let res = await axios.get(`${url_API}/products?_page=${payload.curPage}&_limit=${payload.ItemsPerPage}${searchData}`);
    return [res.data, res.headers["x-total-count"]]
})

// console.log(loadProducts.pending()) // return action with (type:shop/loadProducts/pending, payload:undefined, meta)
// console.log(loadProducts.fulfilled())
// console.log(loadProducts.rejected()) // return action with (type:shop/loadProducts/pending, payload:undefined, meta, error)

const initialState = {
    products: [],
    isLoading: false,
    err: null,
    searchData: "",
    maxNumOfitems: 0,
    ItemsPerPage: 10,
    curPage: 1,
    timer: null
}

// FilterProducts, setCurPage, etc. are all reducers, and the action is auto generated with the same name of reducer 
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
            // action type: slicename/action name (same name of reducer) 
            state.timer = action.payload
        }
    },

    extraReducers: {
        [loadProducts.pending]: (state) => {
            state.isLoading = true;
        },

        [loadProducts.fulfilled]: (state, action) => {
            state.products = action.payload[0];
            state.maxNumOfitems = action.payload[1];
            state.isLoading = false;
        },

        [loadProducts.rejected]: (state) => {
            state.isLoading = false;
        },
    }
})

export const { filterProducts, changeItemsPerPage, setCurPage, setSearchData, setTimer } = shopSlice.actions;
export default shopSlice.reducer;