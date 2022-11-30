import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeData = createAsyncThunk("homeData",
async()=>{
	const response = await axios.get("")
})

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
