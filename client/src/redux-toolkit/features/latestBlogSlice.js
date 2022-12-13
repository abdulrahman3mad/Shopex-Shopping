import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url_API } from "../../config";

export const getLatestBlogData = createAsyncThunk(
	"latestBlog/getData",
	async (arg, thunkAPI) => {
		try {
			const res = await axios.get(`${url_API}/latest_blog`);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	}
);

const latestBlogSlice = createSlice({
	name: "latestBlog",
	initialState: {
		data: null,
		isLoading: false,
		error: false,
	},
	extraReducers: (builder) => {
		builder.addCase(getLatestBlogData.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(getLatestBlogData.fulfilled, (state, action) => {
			state.data = action.payload;
			state.isLoading = false;
		});
		builder.addCase(getLatestBlogData.rejected, (state, action) => {
			state.error = true;
			state.isLoading = false;
		});
	},
});

export default latestBlogSlice.reducer;
