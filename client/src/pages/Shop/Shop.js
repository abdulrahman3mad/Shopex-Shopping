// Environment
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadProducts, setCurPage } from "../../redux-toolkit/features/shopSlice"

// Components
import PageHeading from "../../components/PageHeading/PageHeading"
import ProductsSearchForm from "../../components/ProductsSearchForm/ProductsSearchForm"
import Pagination from "../../components/Pagination/Pagination";

//Sections
import ProductsList from "../../sections/ProductsList/ProductsList"
import useLoading from "../../Hooks/useLoading";

function Shop() {

    const dispatch = useDispatch();
    const shop = useSelector((state => state.shop));
    const { products, loading, ItemsPerPage, curPage, maxNumOfitems, searchData } = shop;

    useEffect(() => {
        if (searchData) dispatch(setCurPage(1));
        dispatch(loadProducts({ curPage, ItemsPerPage, searchData }))
    }, [ItemsPerPage, curPage, searchData])

    const handleSliding = (curPage) => dispatch(setCurPage(curPage));

    const getPagination = () => (
        <Pagination
            maxNumOfitems={maxNumOfitems}
            ItemsPerPage={ItemsPerPage}
            handleSliding={handleSliding}
        />)

    return (
        <>
            <PageHeading heading="Our Shop" pages={["Home", "Shop"]} />
            <div className="section-spacing">
                <div className="container">
                    <div className="d-md-flex align-content-center justify-content-between">
                        <ProductsSearchForm />
                        {getPagination()}
                    </div>
                    {useLoading(loading, () => <ProductsList products={products} />)}
                    {getPagination()}
                </div>
            </div>
        </>
    )
}

export default Shop;