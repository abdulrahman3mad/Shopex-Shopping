import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url_API } from "../../config";

export const getFeaturedData = createAsyncThunk(
	"featured/getFeaturedData",
	async (arg, thunkAPI) => {
		try {
			const res = await axios.get(`${url_API}/featured_products`);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const FeaturedSlice = createSlice({
	initialState: {
		data: null,
		isLoading: false,
		error: false,
	},
	name: "Featured",
	extraReducers: (builder) => {
		builder.addCase(getFeaturedData.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(getFeaturedData.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		});
		builder.addCase(getFeaturedData.rejected, (state, action) => {
			state.isLoading = false;
			state.error = true;
		});
	},
});

export default FeaturedSlice.reducer;
