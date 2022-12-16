import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authMessage: "",
    validationMessage: {}
}

const authMessage = createSlice({
    name: "authMessage",
    initialState,
    reducers: {
        setValidationMessage: (state, action) => {
            state.message.validationMessage = action.payload;
        },

        setAuthMessage: (state, action)=>{
            state.message.authMessage = action.payload;
        },

        clearMessage: (state) => {
            state.message = {};
        }
    }
})

export const { setValidationMessage, setAuthMessage, clearMessage } = authMessage.actions;
export default authMessage.reducer;