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
		loading: false,
		error: false,
	},
	name: "shopexOffer",
	extraReducers: (builder) => {
		builder.addCase(getShopexOffer.pending, (state, action) => {
			state.loading = true;
			state.error = false;
		});
		builder.addCase(getShopexOffer.fulfilled, (state, action) => {
			state.data = action.payload;
			state.error = false;
			state.loading = false;
		});
		builder.addCase(getShopexOffer.rejected, (state, action) => {
			state.loading = false;
			state.error = true;
		});
	},
});

export default shopexOfferSlice.reducer;
