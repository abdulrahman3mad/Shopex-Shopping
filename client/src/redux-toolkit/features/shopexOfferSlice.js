import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url_API } from "../../config";

export const getShopexOffer = createAsyncThunk(
	"shopexOffer/getShopexOfferData",
	async (arg, thunkAPI) => {
		const res = await axios.get(`${url_API}/shopex-offer`);
		return res.data;
	}
);

export const shopexOfferSlice = createSlice({
	initialState: {
		data: null,
		isLoading: false,
		error: false,
	},
	name: "shopexOffer",
	extraReducers: (builder) => {
		builder.addCase(getShopexOffer.pending, (state, action) => {
			state.isLoading = true;
			state.error = false;
		});
		builder.addCase(getShopexOffer.fulfilled, (state, action) => {
			state.data = action.payload;
			state.error = false;
			state.isLoading = false;
		});
		builder.addCase(getShopexOffer.rejected, (state, action) => {
			state.isLoading = false;
			state.error = true;
		});
	},
});

export default shopexOfferSlice.reducer;
