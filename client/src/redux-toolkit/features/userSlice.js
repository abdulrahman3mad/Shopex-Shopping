import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../../services/userService";
import { setAuthMessage } from "./authMessage";
import { clearCart, resetCart } from "./cartSlice";

export const register = createAsyncThunk("user-slice/register", async (payload, thunkAPI) => {
    let user = await userService.register(payload);
    if (user && user.accessToken) {
        thunkAPI.dispatch(setAuthMessage(""));
        localStorage.setItem("user", JSON.stringify(user));
    }
    else thunkAPI.dispatch(setAuthMessage("This Email is taken. Try another"));
    return user.user;
})


export const login = createAsyncThunk("user-slice/login", async (payload, thunkAPI) => {
    let user = await userService.login(payload);
    if (user && user.accessToken) {
        thunkAPI.dispatch(setAuthMessage(""));
        localStorage.setItem("user", JSON.stringify(user));
    }
    else thunkAPI.dispatch(setAuthMessage("Email or password is wrong!"));
    return user.user;
})

export const logout = createAsyncThunk("user-slice/logout", async (payload, thunkAPI) => {
    thunkAPI.dispatch(resetCart());
    localStorage.removeItem("user")
    return 
})

const initialState = {
    user: {}
}

export const userSlice = createSlice({
    name: "user-slice",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },

        getUserData: (state, action) => {
            state.user = userService.getUserData();
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


        [logout.pending]: (state) => { },
        [logout.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
        [logout.rejected]: (state) => {
            state.user = {};
        },
    }
})

export const { setUser, getUserData } = userSlice.actions
export default userSlice.reducer;