import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../../services/userService";
import { setAuthMessage} from "./authMessage";

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

const initialState = {
    user: {}
}

export const userSlice = createSlice({
    name: "user-slice",
    initialState,
    reducers: {
        logout: (state, action) => {
            userService.logout();
            state.user = {};
        },

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

    }
})

export const { logout, setUser, getUserData } = userSlice.actions
export default userSlice.reducer;