import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadProducts, filterProducts, setCurPage } from "../../redux-toolkit/features/productsSlice"
import PageHeading from "../../components/PageHeading/PageHeading"
import ProductsList from "../../sections/ProductsList/ProductsList"
import ProductsSearchForm from "../../components/ProductsSearchForm/ProductsSearchForm"
import Pagination from "../../components/Pagination/Pagination";

function Products() {
    const dispatch = useDispatch();
    const { products: { products, loading, filteredProducts, ItemsPerPage, curPage } } = useSelector((state => state));
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(ItemsPerPage);

    useEffect(() => {
        dispatch(loadProducts());
    }, [])

    useEffect(() => {
        setStart((curPage - 1) * ItemsPerPage);
        setEnd(curPage * ItemsPerPage);
    }, [ItemsPerPage, curPage])

    function handleSliding(curPage) {
        dispatch(setCurPage(curPage));
    }

    return (
        <>
            <PageHeading heading="Our Shop" pages={["Home", "Products"]} />
            <div className="section-spacing">
                <div className="container">
                    <div className="d-md-flex  align-content-center justify-content-between">
                        <ProductsSearchForm />
                        <Pagination
                            maxNumOfitems={filteredProducts ? filteredProducts?.length : products?.length}
                            ItemsPerPage={ItemsPerPage}
                            handleSliding={handleSliding}
                        />
                    </div>
                    {
                        loading ? (< div className="text-center"><img src="images/loading.gif"></img></div>)
                            : (<ProductsList
                                products={filteredProducts ? filteredProducts : products}
                                start={start}
                                end={end} />)

                    }

                    <Pagination
                        maxNumOfitems={filteredProducts ? filteredProducts?.length : products?.length}
                        ItemsPerPage={ItemsPerPage}
                        handleSliding={handleSliding}
                    />
                </div>
            </div>
        </>
    )
}

export default Products;