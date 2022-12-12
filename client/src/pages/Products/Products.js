import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../redux-toolkit/features/products"
import PageHeading from "../../components/PageHeading/PageHeading"
import ProductsList from "../../sections/ProductsList/ProductsList"
import ProductsSearchForm from "../../components/ProductsSearchForm/ProductsSearchForm"

function Products() {
    const dispatch = useDispatch();
    const { products: { products } } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getProducts());
    }, [])

    

    return (
        <>
            <PageHeading heading="Our Shop" pages={["Home", "Products"]} />
            <div className="section-spacing ">
                <div className="container">
                    <ProductsSearchForm />
                    <ProductsList products={products}/>
                </div>
            </div>
        </>
    )
}

export default Products;