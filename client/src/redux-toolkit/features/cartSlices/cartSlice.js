import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import isLoggedIn from "../../../helpers/isLoggedIn";
import cartService from "../../../services/cartService";

export const getCart = createAsyncThunk("cart-slice/getCart", async () => {
    let user = isLoggedIn();
    let data = await cartService.getCart(user);
    if (data && !data.message) return data
})

export const removeFromCart = createAsyncThunk("cart-slice/removeFromCart", async (payload, thunkAPI) => {
    let cart = thunkAPI.getState().cart.cart;
    cart = await updateProducts(cart, payload, -1);
    let data = cartService.updateCart(cart);
    if (data && !data.message) return cart;
})

export const addToCart = createAsyncThunk("cart-slice/addToCart", async (payload, thunkAPI) => {
    let user = isLoggedIn();
    let cart = thunkAPI.getState().cart.cart;
    if (!cart) {
        let cart = { products: [{ ...payload, quantity: 1 }], totalPrice: payload.price }
        cart = await cartService.addNewCart(cart, user);
        return cart;
    }
    else {
        if (doesProductExist(cart, payload)) cart = updateProducts(cart, payload, 1);
        else cart = addNewProduct(cart, payload);
        let data = await cartService.updateCart(cart);
        return data;
    }
})

export const clearUserCart = createAsyncThunk("cart-slice/clearCart", async (payload, thunkAPI) => {
    let cart = thunkAPI.getState().cart.cart;
    cart = await cartService.clearCart(cart);
    return;
})

const initialState = {}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        resetCart: (state, action) => {
            state.cart = {};
        }
    },
    extraReducers: {
        [getCart.fulfilled]: (state, action) => {
            state.cart = action.payload;
        },

        [clearUserCart.fulfilled]: (state, action) => {
            state.cart = action.payload;
        },

        [addToCart.fulfilled]: (state, action) => {
            state.cart = action.payload;
        },


        [removeFromCart.fulfilled]: (state, action) => {
            state.cart = action.payload;
        },
    }
})

function updateProducts(cart, payload, quantity) {
    let products = cart.products.map((product) => {
        if (product.id === payload.id) return { ...product, quantity: product.quantity + quantity }
        return product;
    })

    let totalPrice = cart.totalPrice;
    if (quantity < 0) {
        products = products.filter((product) => product.quantity > 0);
        totalPrice -= payload.price;
    } else {
        totalPrice += payload.price;
    }

    cart = { ...cart, products, totalPrice };
    return cart;
}

function doesProductExist(cart, payload) {
    let product = cart.products.find((product) => product.id === payload.id)
    return product && Object.keys(product).length;
}

function addNewProduct(cart, payload) {
    return {
        ...cart, products: [...cart.products, { ...payload, quantity: 1 }],
        totalPrice: cart.totalPrice + payload.price
    };
}


export const { resetCart } = cartSlice.actions;
export default cartSlice.reducer