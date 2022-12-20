import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../../../services/userService";
import { setAuthMessage } from "./authMessage";
import { resetCart } from "../cartSlices/cartSlice";

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
    else {
        thunkAPI.dispatch(setAuthMessage("Email or password is wrong!"));
    }
    return user.user;
})

export const logout = createAsyncThunk("user-slice/logout", async (payload, thunkAPI) => {
    thunkAPI.dispatch(resetCart());
    localStorage.removeItem("user")
    return {}
})

const initialState = {
    user: {},
    loading: false,
}

export const userSlice = createSlice({
    name: "user-slice",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },

        setUserData: (state, action) => {
            state.user = userService.setUserData();
        }
    },

    extraReducers: {
        [register.pending]: (state) => { 
            state.loading = true;
        },

        [register.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.loading = false
        },

        [register.rejected]: (state) => { 
            state.loading = false
        },

        [login.pending]: (state) => { 
            state.loading = true;
        },

        [login.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.loading = false;
        },

        [login.rejected]: (state) => {
            state.user = {};
            state.loading = false;
        },

        [logout.pending]: (state) => { 
            state.loading = true;
        },

        [logout.fulfilled]: (state, action) => {
            state.user = {}
            state.loading = false;
        },

        [logout.rejected]: (state) => {
            state.user = {};
            state.loading = false;
        },
    }
})

export const { setUser, setUserData } = userSlice.actions
export default userSlice.reducer;