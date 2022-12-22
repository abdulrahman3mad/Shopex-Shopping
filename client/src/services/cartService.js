import axios from "axios";
import { CART_API } from "../config";
import authHeader from "helpers/authHeader";

async function getCart(user) {
    try {
        let res = await axios.get(`${CART_API}/${user.id}`, { headers: authHeader() })
        return res
    } catch (err) {
        return err
    }
}

async function addNewCart(cart, user) {
    try {
        let res = await axios({
            method: "post",
            url: `${CART_API}`,
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
            url: `${CART_API}/update/${cart.id}`,
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
        url: `${CART_API}/delete/${cart.id}`,
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