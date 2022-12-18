// Environment
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Components
import CartProductsTable from "../../components/CartProductsTable/CartProductsTable";
import CartTotalsCard from "../../components/CartTotalsCard/CartTotalsCard";
import EmptyCart from "../../components/EmptyCart/EmptyCart";

// Imports
import { PageHeading } from "../../Imports/authImports";

// Slices
import { clearUserCart } from "../../redux-toolkit/features/cartSlice";


function Cart() {
    const { cart: { cart } } = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>
            <PageHeading heading="Shopping Cart" pages={["Home", "Cart"]} />
            <main className="section-spacing cart">
                <div className="container">
                    <div className="row justify-content-center">
                        {cart ?
                            <>
                                <div className="col-xl-8 col-12">
                                    <CartProductsTable products={cart?.products} />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <button className="bg-clr-accent accent-bg-hover text-white fs-9 py-1 mt-3 btn px-4 rounded-1" onClick={() => navigate("/shop")}>Update Cart</button>
                                        <button className="border-accent accent-bg-hover text-white-hover fs-9 py-1 mt-3 btn px-4 rounded-1" onClick={() => dispatch(clearUserCart())}>Clear Cart</button>
                                    </div>
                                </div>
                                <div className="col-xl-3 offset-xl-1 mt-5 mt-xl-0 pt-xl-0 pt-5 col-12 col-md-9 ">
                                    <CartTotalsCard total={cart?.totalPrice} />
                                </div>
                            </> : <EmptyCart />
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default Cart;