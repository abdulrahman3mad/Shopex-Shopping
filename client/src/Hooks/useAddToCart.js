import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux-toolkit/features/cartSlice";

function useAddToCart(product) {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleAddToCart(product) {
        if (!user) navigate("/login");
        dispatch(addToCart(product));
    }

    return handleAddToCart;
}

export default useAddToCart;