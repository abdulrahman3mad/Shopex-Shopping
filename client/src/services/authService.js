import axios from "axios";
const USERAPI = "http://localhost:5000/users";

const login = async (payload) => {
    let user = await axios.get(`${USERAPI}?email=${payload.email}&password=${payload.password}`);
    return user.data;
}

const register = async (payload) => {
    let user = await axios.get(`${USERAPI}?email=${payload.email}`);
    if (user.data.length) return 
    
    let data = await axios.post(`${USERAPI}/`, payload);
    return data.data;
}

const logout = () => {
    
}

export default {
    login,
    register,
    login
}