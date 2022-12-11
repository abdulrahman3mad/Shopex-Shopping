import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url_API } from "../../config";

export const getLatestProData = createAsyncThunk(
	"latestPro/getLatestProData",
	async (arg, thunkAPI) => {
		try {
			const res = await axios.get(`${url_API}/latest_products`);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const latestProSlice = createSlice({
	initialState: {
		data: null,
		loading: false,
		error: false,
	},
	name: "latestPro",
	extraReducers: (builder) => {
		builder.addCase(getLatestProData.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getLatestProData.fulfilled, (state, action) => {
			state.data = action.payload;
			state.loading = false;
		});
		builder.addCase(getLatestProData.rejected, (state, action) => {
			state.error = true;
			state.loading = false;
		});
	},
});

export default latestProSlice.reducer;

