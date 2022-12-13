import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url_API } from "../../config";

export const getBrands = createAsyncThunk(
	"brands/getData",
	async (arg, thunkAPI) => {
		try {
			const res = await axios.get(`${url_API}/brands`);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	}
);

const brandsSlice = createSlice({
	name: "brands",
	initialState: {
		data: null,
		isLoading: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder.addCase(getBrands.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(getBrands.fulfilled, (state, action) => {
			state.data = action.payload;
			state.isLoading = false;
		});
		builder.addCase(getBrands.rejected, (state, action) => {
			state.error = true;
			state.isLoading = false;
		});
	},
});

export default brandsSlice.reducer;
