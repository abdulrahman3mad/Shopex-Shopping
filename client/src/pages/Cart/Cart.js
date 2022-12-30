// Environment
import { useSelector } from "react-redux";
// Hooks
import useConditionalRender from "Hooks/useConditionalRender";
// components 
import { PageHeading, CartData, EmptyCart } from "components";


function Cart() {
    const { cart: { cart } } = useSelector((state) => state);
    let renderingComp = useConditionalRender(cart, <CartData cart={cart} />, <EmptyCart />);

    return (
        <>
            <PageHeading heading="Shopping Cart" pages={["Home", "Cart"]} />
            <main className="section-spacing cart">
                <div className="container">
                    <div className="row justify-content-center">
                        {renderingComp}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Cart;