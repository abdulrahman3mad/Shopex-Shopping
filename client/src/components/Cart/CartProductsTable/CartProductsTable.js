// Environment
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// Slices
import { clearUserCart } from "../../../redux-toolkit/features/cartSlices/cartSlice";
// Components 
import {CartProduct, CartTableHeader} from "../../../components"

function CartProductsTable({ products }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const productsItems = products.map((product) => {
        return <CartProduct
            key={product.id}
            product={product}
            totalPrice={((product?.quantity || 1) * product.price).toFixed(2)}
        />
    })

    return (
        <>
            <div className="table-responsive">
                <table className="table ff-primary table-borderless">
                    <CartTableHeader />
                    <tbody>
                        {productsItems}
                    </tbody>
                </table>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <button
                    className="bg-clr-accent accent-bg-hover text-white fs-9 py-1 mt-3 btn px-4 rounded-1"
                    onClick={() => navigate("/shop")}>Update Cart
                </button>
                <button
                    className="border-accent accent-bg-hover text-white-hover fs-9 py-1 mt-3 btn px-4 rounded-1"
                    onClick={() => dispatch(clearUserCart())}>Clear Cart
                </button>
            </div>
        </>
    )
}

export default CartProductsTable