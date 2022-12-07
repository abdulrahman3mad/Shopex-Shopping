import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthServices from "../../services/authService";
import { setMessage } from "./authMessage";
import { dispatch } from "react";

export const register = createAsyncThunk("auth-slice/register", async (payload, thunkAPI) => {
    let user = await AuthServices.register(payload);
    if (!user) {
        thunkAPI.dispatch(setMessage("This Email is taken. Try another"));
    }
    else thunkAPI.dispatch(setMessage(""))
    return user;
})

export const login = createAsyncThunk("auth-slice/login", async (payload, thunkAPI) => {
    let user = await AuthServices.login(payload);
    if (!user.length) thunkAPI.dispatch(setMessage("Email or password is wrong!"));
    else thunkAPI.dispatch(setMessage(""));
    return user[0];
})


const initialState = {
    auth: {}
}

export const authSlice = createSlice({
    name: "auth-slice",
    initialState,
    reducers: {
        logout: (state, action) => {
            state.auth = {}
        }
    },

    extraReducers: {
        [register.pending]: (state) => { },
        [register.fulfilled]: (state, action) => {
            state.auth = action.payload;
        },
        [register.rejected]: (state) => { },

        [login.pending]: (state) => { },
        [login.fulfilled]: (state, action) => {
            state.auth = action.payload;
        },
        [login.rejected]: (state) => {
            state.auth = {};
         },
    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer;