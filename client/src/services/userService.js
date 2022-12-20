import axios from "axios";
import { url_API } from "../config";

const login = async (payload) => {
    try {
        let user = await axios.post(`${url_API}/login`, {
            "email": payload.email,
            "password": payload.password
        });
        return user.data;
    } catch {
        return {}
    }
}

const register = async (payload) => {
    let user = await axios.get(`${url_API}/users?email=${payload.email}`);
    if (user.data.length) return

    let data = await axios.post(`${url_API}/register`, payload);
    return data.data;
}

const logout = () => {
    localStorage.removeItem("user");
}

const setUserData = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    return user && user.user;
}

const auth = {
    login,
    register,
    logout,
    setUserData
}

export default auth;

