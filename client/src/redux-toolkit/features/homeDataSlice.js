import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url_API } from "../../config/index";
import axios from "axios";

export const getData = createAsyncThunk(
	"homeData/fetchData",
	async (arg, thunkAPI) => {
		try {
			const res = await fetch(`${url_API}/welcome`);
			const data = await res.json();
			return data;
			// const res = await axios.get(`${url_API}/welcome`);
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
		builder.addCase(getData.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(getData.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		});
		builder.addCase(getData.rejected, (state, action) => {
			state.isLoading = false;
		});
	},
});

export default homeSlice.reducer;
