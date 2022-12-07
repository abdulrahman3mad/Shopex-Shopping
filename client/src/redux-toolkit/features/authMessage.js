import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message:""
}

const authMessage = createSlice({
    name: "authMessage",
    initialState,
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        clearMessage: (state) => {
            state.message = "";
        }
    }
})

export const {setMessage, clearMessage} = authMessage.actions;
export default authMessage.reducer;