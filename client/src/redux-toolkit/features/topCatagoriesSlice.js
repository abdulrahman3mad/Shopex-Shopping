import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url_API } from "../../config";

export const getTopCatagories = createAsyncThunk(
	"TopCatagories/getData",
	async (arg, thunkAPI) => {
		const res = await axios.get(`${url_API}/top_catagories`);
		return res.data;
	}
);

export const topCatagoriesSlice = createSlice({
	name: "TopCatagories",
	initialState: {
		data: null,
		isLoading: false,
		error: false,
	},
	extraReducers: (builder) => {
		builder.addCase(getTopCatagories.pending, (state, action) => {
			state.isLoading = true;
			state.error = false;
		});
		builder.addCase(getTopCatagories.fulfilled, (state, action) => {
			state.data = action.payload;
			state.error = false;
			state.isLoading = false;
		});
		builder.addCase(getTopCatagories.rejected, (state, action) => {
			state.isLoading = false;
			state.error = true;
		});
	},
});

export default topCatagoriesSlice.reducer;
