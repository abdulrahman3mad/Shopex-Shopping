// Environment
import { useDispatch } from "react-redux";
// Slices
import { addToCart } from "../../redux-toolkit/features/cartSlice"
// Components 
import CartProduct from "../CartProduct/CartProduct"
import CartTableHeader from "../CartTableHeader/CartTableHeader"

function CartProductsTable({ products }) {

    const productsItems = products.map((product) => {
        return <CartProduct
            key={product.id}
            product={product}
            totalPrice={((product?.quantity || 1) * product.price).toFixed(2)}
        />

        dispatch()
    })

    return (
        <div className="table-responsive">
            <table className="table ff-primary table-borderless">
                <CartTableHeader />
                <tbody>
                    {productsItems}
                </tbody>
            </table>
        </div>
    )
}

export default CartProductsTable