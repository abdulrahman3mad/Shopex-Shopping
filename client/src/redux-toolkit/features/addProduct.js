import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url_API } from "../../config";

export const insertProduct = createAsyncThunk(
	"product/insertProduct",
	async (data, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const res = await axios.post(url_API + "/products", data);
			console.log(res);
		} catch (error) {
			return rejectWithValue(error.massage);
		}
	}
);

const productSlice = createSlice({
	name: "product",
	initialState: {
		products: null,
		isLoading: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder.addCase(insertProduct.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(insertProduct.fulfilled, (state, action) => {
			state.isLoading = false;
			state.products = action.payload;
		});
		builder.addCase(insertProduct.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	},
});

export default productSlice.reducer;
