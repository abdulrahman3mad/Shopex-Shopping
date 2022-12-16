import { Link } from "react-router-dom"

function CartTotalsCard({total}) {
    return (
        <div className="cart-totals">
            <p className="fw-bold ff-primary text-center">Cart Totals</p>
            <div className="totals fs-9 bg-clr-primary-light p-4 rounded-1 text-clr-heading">
                <div className="d-flex align-content-center justify-content-between border-bottom mb-4 pb-2">
                    <p className="mb-0">Subtotals:</p>
                    <p className="mb-0">${total.toFixed(2)}</p>
                </div>

                <div className="d-flex align-content-center justify-content-between border-bottom pt-2 pb-1">
                    <p className="mb-0">Totals:</p>
                    <p className="mb-0">${(total * 114/100).toFixed(2)}</p>
                </div>
                <div className="form-check gap-2 mt-4 pt-2 d-flex align-items-center px-0">
                    <input type="checkbox" value="" id="flexCheckIndeterminate" />
                    <label className="form-check-label fs-10  text-black-50" htmlFor="flexCheckIndeterminate">
                        Shipping & taxes calculated at checkout
                    </label>
                </div>
                <Link to="#" className="rounded-1 cheack-btn btn d-block text-white w-100 mt-4">Procced To Cheakout</Link>
            </div>
        </div>
    )
}

export default CartTotalsCard