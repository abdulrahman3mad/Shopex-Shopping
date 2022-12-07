import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url_API } from "../../config/index";
import axios from "axios";

export const fetchHomeData = createAsyncThunk(
	"homeData/fetchData",
	async () => {
		const res = await axios.get(`${url_API}/welcome`);
		console.log(res);
	}
);

const initialState = {
	data: [],
	loading: false,
	error: null,
};

export const homeSlice = createSlice({
	initialState: initialState,
	name: "homeData",
	reducers: {},
});

export const {} = homeSlice.actions;
export default homeSlice.reducer;
