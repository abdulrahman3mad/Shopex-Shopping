import { Link } from "react-router-dom";
import { PageHeading } from "../../Imports/authImports";

function Cart() {
    return (
        <>
            <PageHeading heading="Shopping Cart" pages={["Home", "Cart"]} />
            <main className="section-spacing cart">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-12">
                            <div className="table-responsive">
                                <table className="table ff-primary table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border border-1 border-top-0 border-end-0 border-start-0 align-middle">
                                            <td className="d-flex gap-4 align-items-center">
                                                <div className="product-img">
                                                    <img src="images/Featured-Products-img/plywood-2.webp" />
                                                </div>
                                                <div className="product-desc">
                                                    <p className="fw-bold mb-1 product-name">Basic Korean-style Bag</p>
                                                    <p className="clr | text-black-50 fs-10 mb-1">Color:Brown</p>
                                                    <p className="size | text-black-50 fs-10 mb-0">Size:XL</p>
                                                </div>
                                            </td>
                                            <td className="price">$32.00</td>
                                            <td>
                                                <div className="add-remove-box text-center p-0 m-0 text-black-50 d-flex align-items-center">
                                                    <span className="add-product-icon pointer bg-clr-mid-gray fs-4 px-1 w-25">+</span>
                                                    <span className="product-count bg-light fs-5 px-3 ">1</span>
                                                    <span className="remove-product-icon pointer bg-clr-mid-gray fs-4 px-1 w-25">-</span>
                                                </div>
                                            </td>
                                            <td className="total-price">$219.00</td>
                                        </tr>

                                        <tr className="border border-1 border-top-0 border-end-0 border-start-0 align-middle">
                                            <td className="d-flex gap-4 align-items-center">
                                                <div className="product-img">
                                                    <img src="images/Featured-Products-img/plywood-2.webp" />
                                                </div>
                                                <div className="product-desc">
                                                    <p className="fw-bold mb-1 product-name">Basic Korean-style Bag</p>
                                                    <p className="clr | text-black-50 fs-10 mb-1">Color:Brown</p>
                                                    <p className="size | text-black-50 fs-10 mb-0">Size:XL</p>
                                                </div>
                                            </td>
                                            <td className="price">$32.00</td>
                                            <td > 
                                                <div className="add-remove-box text-center p-0 m-0 text-black-50 d-flex align-items-center">
                                                    <span className="add-product-icon pointer bg-clr-mid-gray fs-4 px-1 w-25">+</span>
                                                    <span className="product-count bg-light fs-5 px-3 ">1</span>
                                                    <span className="remove-product-icon pointer bg-clr-mid-gray fs-4 px-1 w-25">-</span>
                                                </div>
                                            </td>
                                            <td className="total-price">$219.00</td>
                                        </tr>
                                    
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <button className="bg-clr-accent accent-bg-hover text-white fs-9 py-1 mt-3 btn px-4 rounded-1">Update Cart</button>
                                <button className="border-accent accent-bg-hover text-white-hover fs-9 py-1 mt-3 btn px-4 rounded-1">Clear Cart</button>
                            </div>
                        </div>
                        <div className="col-xl-3 offset-xl-1 mt-5 mt-xl-0 pt-xl-0 pt-5 col-12 col-md-9 ">
                            <div className="cart-totals">
                                <p className="fw-bold ff-primary text-center">Cart Totals</p>
                                <div className="totals fs-9 bg-clr-primary-light p-4 rounded-1 text-clr-heading">
                                    <div className="d-flex align-content-center justify-content-between border-bottom mb-4 pb-2">
                                        <p className="mb-0">Subtotals:</p>
                                        <p className="mb-0">$381.00</p>
                                    </div>

                                    <div className="d-flex align-content-center justify-content-between border-bottom pt-2 pb-1">
                                        <p className="mb-0">Totals:</p>
                                        <p className="mb-0">$381.00</p>
                                    </div>
                                    <div className="form-check gap-2 mt-4 pt-2 d-flex align-items-center px-0">
                                        <input type="checkbox" value="" id="flexCheckIndeterminate" />
                                        <label className="form-check-label fs-10  text-black-50" for="flexCheckIndeterminate">
                                            Shipping & taxes calculated at checkout
                                        </label>
                                    </div>
                                    <Link to="#" className="rounded-1 cheack-btn btn d-block text-white w-100 mt-4">Procced To Cheakout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Cart;