import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url_API } from "../../config";

export const getTrendingProducts = createAsyncThunk(
	"TrendingProducts/getData",
	async (arg, thunkAPI) => {
		const res = await axios.get(`${url_API}/trending_products`);
		return res.data;
	}
);

export const TrendingProductsSlice = createSlice({
	name: "TrendingProducts",
	initialState: {
		data: null,
		isLoading: false,
		error: false,
	},
	extraReducers: (builder) => {
		builder.addCase(getTrendingProducts.pending, (state, action) => {
			state.isLoading = true;
			state.error = false;
		});
		builder.addCase(getTrendingProducts.fulfilled, (state, action) => {
			state.data = action.payload;
			state.error = false;
			state.isLoading = false;
		});
		builder.addCase(getTrendingProducts.rejected, (state, action) => {
			state.isLoading = false;
			state.error = true;
		});
	},
});

export default TrendingProductsSlice.reducer;
