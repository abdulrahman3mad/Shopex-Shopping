import axios from "axios";
import { url_API } from "../config";
import authHeader from "../helpers/authHeader";

async function getCart(user) {
    try {
        let res = await axios.get(`${url_API}/carts/${user.id}`, { headers: authHeader() })
        return res
    } catch (err) {
        return err
    }
}

async function addNewCart(cart, user) {
    try {
        let res = await axios({
            method: "post",
            url: `${url_API}/carts`,
            headers: authHeader(),
            data: {
                ...cart,
                userId: user.id,
                id: user.id
            }
        })
        return res
    } catch (err) {
        return err;
    }
}

async function updateCart(cart, user) {
    let res = null;
    try {
        res = await axios({
            method: "patch",
            url: `${url_API}/carts/update/${cart.id}`,
            headers: authHeader(),
            data: cart
        })
        return res
    } catch (err) {
        return err;
    }
}

async function clearCart(cart) {
    let res = await axios({
        method: "delete",
        url: `${url_API}/carts/delete/${cart.id}`,
        headers: authHeader(),
    })

    return res
}

const cartService = {
    getCart,
    addNewCart,
    updateCart,
    clearCart,
}
export default cartService