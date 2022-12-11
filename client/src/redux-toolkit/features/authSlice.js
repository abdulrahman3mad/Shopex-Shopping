import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthServices from "../../services/authService";
import { setMessage } from "./authMessage";

export const register = createAsyncThunk("auth-slice/register", async (payload, thunkAPI) => {
    let user = await AuthServices.register(payload);
    if (!user) thunkAPI.dispatch(setMessage("This Email is taken. Try another"));
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
    user: {}
}

export const authSlice = createSlice({
    name: "auth-slice",
    initialState,
    reducers: {
        logout: (state, action) => {
            state.user = {}
        }
    },

    extraReducers: {
        [register.pending]: (state) => { },
        [register.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
        [register.rejected]: (state) => { },

        [login.pending]: (state) => { },
        [login.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
        [login.rejected]: (state) => {
            state.user = {};
         },
    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer;