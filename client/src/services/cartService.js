import axios from "axios";
import { url_API } from "../config";
import authHeader from "../helpers/authHeader";

async function getCart(user) {
    try {
        let res = await axios.get(`${url_API}/carts/${user.id}`, { headers: authHeader() });
        return res?.data[0]
    }
    catch (err) {
        console.log(err)
        return err.response.status
    }
}

async function addNewCart(product, user) {
    let res = await axios({
        method: "post",
        url: `${url_API}/carts`,
        headers: authHeader(),
        data: {
            id:user.id,
            userId: user.id,
            products: [{ ...product, quantity: 1 }]
        }
    })
    return res.data
}

async function updateCart(cart) {
    let res = null;
    try {
        res = await axios({
            method: "patch",
            url: `${url_API}/carts/update/${cart.id}`,
            headers: authHeader(),
            data: cart
        })
    } catch (err) {
        return err.response.status;
    }
    return res?.data;
}

async function clearCart(cart) {
    let res = await axios({
        method: "delete",
        url: `${url_API}/carts/delete/${cart.id}`,
        headers: authHeader(),
    })

    return res.data;
}

export default {
    getCart,
    addNewCart,
    updateCart,
    clearCart
}