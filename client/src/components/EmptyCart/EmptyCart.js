import { Link } from "react-router-dom"

function EmptyCart() {
    return (
        <div className="d-flex flex-column align-items-center">
            <img src="images/cart/emptyCart.svg" className="empty-cart-img" alt="empty cart"></img>
            <p className="text-center mt-4">Your Cart is Empty</p>
            <p className="fs-8 text-center">Browse our categories and discover our best deals!</p>
            <Link to="/shop" className="btn bg-clr-accent text-white mt-4 accent-bg-hover">Start Shopping</Link>
        </div>
    )
}

export default EmptyCart