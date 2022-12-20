// Environment
import { useDispatch } from "react-redux";

// Slices
import { addToCart, removeFromCart } from "../../redux-toolkit/features/cartSlices/cartSlice";

function CartProduct({ product, totalPrice }) {
    const { title, price, color, size, quantity } = product;
    const dispatch = useDispatch();

    return (
        <tr className="border border-1 border-top-0 border-end-0 border-start-0 align-middle">
            <td className="d-flex gap-4 align-items-center">
                <div className="product-img">
                    <img src={product.img} alt="product" />
                </div>
                <div className="product-desc">
                    <p className="fw-bold mb-1 product-name">{title}</p>
                    <p className="clr | text-black-50 fs-9 mb-1">Color: {color}</p>
                    <p className="size | text-black-50 fs-9 mb-0">Size: {size}</p>
                </div>
            </td>
            <td className="price">${Number(price).toFixed(2)}</td>
            <td>
                <div className="add-remove-box text-center p-0 m-0 text-black-50 d-flex align-items-center">
                    <span className="add-product-icon pointer bg-clr-mid-gray fs-4 px-1 w-25" onClick={() => dispatch(addToCart(product))}>+</span>
                    <span className="product-count bg-light fs-6 px-2">{quantity}</span>
                    <span className="remove-product-icon pointer bg-clr-mid-gray fs-4 px-1 w-25" onClick={()=> dispatch(removeFromCart(product))}>-</span>
                </div>
            </td>
            <td className="total-price">${totalPrice}</td>
        </tr>
    )
}

export default CartProduct