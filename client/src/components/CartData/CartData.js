import CartProductsTable from "../CartProductsTable/CartProductsTable";
import CartTotalsCard from "../CartTotalsCard/CartTotalsCard";

function CartData({cart}) {
    
    return (
        <>
            <div className="col-xl-8 col-12">
                <CartProductsTable products={cart.products} />
            </div>
            <div className="col-xl-3 offset-xl-1 mt-5 mt-xl-0 pt-xl-0 pt-5 col-12 col-md-9 ">
                <CartTotalsCard total={cart.totalPrice} />
            </div>
        </>
    )
}

export default CartData;