import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url_API } from "../../config/index";
import axios from "axios";

export const getWelcomeData = createAsyncThunk(
	"homeData/fetchData",
	async (arg, thunkAPI) => {
		try {
			const res = await axios.get(`${url_API}/welcome`);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const homeSlice = createSlice({
	initialState: { data: null, isLoading: false, error: null },
	name: "homeData",
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getWelcomeData.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(getWelcomeData.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		});
		builder.addCase(getWelcomeData.rejected, (state, action) => {
			state.isLoading = false;
		});
	},
});

export default homeSlice.reducer;
