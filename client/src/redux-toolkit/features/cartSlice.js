import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import isLoggedIn from "../../helpers/isLoggedIn";
import cartService from "../../services/cartService";
import { logout } from "./userSlice";

export const getCart = createAsyncThunk("cart-slice/getCart", async (payload, thunkAPI) => {
    let user = isLoggedIn();
    if (user && Object.keys(user).length) {
        let data = await cartService.getCart(user.user);
        return data;
    }
})

export const removeFromCart = createAsyncThunk("cart-slice/removeFromCart", async (payload, thunkAPI) => {
    let user = isLoggedIn();
    if (user && Object.keys(user).length) {
        let cart = thunkAPI.getState().cart.cart;
        let products = cart.products.map((product) => {
            if (product.id == payload.id) return { ...product, quantity: product.quantity - 1 };
            return product;
        })

        products = products.filter((product) => product.quantity > 0);
        cart = { ...cart, products };
        cartService.updateCart(cart, user.user);
        return cart;
    }
})

export const addToCart = createAsyncThunk("cart-slice/addToCart", async (payload, thunkAPI) => {
    let user = isLoggedIn();
    if (user && Object.keys(user).length) {
        let cart = thunkAPI.getState().cart.cart;
        if (!cart) return cartService.addNewCart(payload, user.user);
        else {
            let product = cart.products.find((product) => product.id == payload.id)
            if (product && Object.keys(product).length) {
                let products = cart.products.map((product) => {
                    if (product.id == payload.id) return { ...product, quantity: product.quantity + 1 }
                    return product;
                })
                
                cart = { ...cart, products };
            } else cart = { ...cart, products: [...cart.products, { ...payload, quantity: 1 }] }


            cartService.updateCart(cart, user.user);
        }
        return cart;
    }
})

export const clearCart = createAsyncThunk("cart-slice/clearCart", async (payload, thunkAPI) => {
    let user = isLoggedIn();
    let cart = thunkAPI.getState().cart.cart;
    if (user && Object.keys(user).length) await cartService.clearCart(cart);
})

const initialState = {}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
    },
    extraReducers: {
        [getCart.pending]: (state, action) => {

        },

        [getCart.fulfilled]: (state, action) => {
            state.cart = action.payload;
        },

        [getCart.rejected]: (state, action) => {

        },

        [clearCart.pending]: (state, action) => {

        },

        [clearCart.fulfilled]: (state, action) => {
            state.cart = action.payload;
        },

        [clearCart.rejected]: (state, action) => {

        },


        [addToCart.pending]: (state, action) => {

        },

        [addToCart.fulfilled]: (state, action) => {
            state.cart = action.payload;
        },

        [addToCart.rejected]: (state, action) => {

        },


        [removeFromCart.pending]: (state, action) => {

        },

        [removeFromCart.fulfilled]: (state, action) => {
            state.cart = action.payload;
        },

        [removeFromCart.rejected]: (state, action) => {

        },

    }
})

export const { } = cartSlice.actions;
export default cartSlice.reducer