import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url_API } from "../../config";
import axios from "axios";

export const loadProducts = createAsyncThunk("shop/loadProducts", async (payload) => {
    let res = await axios.get(`${url_API}/products?_page=${payload.curPage}&_limit=${payload.ItemsPerPage}&q=${payload.searchData}`);
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
            state.searchData = action.payload
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

export const { filterProducts, changeItemsPerPage, setCurPage, setSearchData } = shopSlice.actions;
export default shopSlice.reducer;