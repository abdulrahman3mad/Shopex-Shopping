// Environment
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadProducts, setCurPage, setTimer } from "../../redux-toolkit/features/shopSlice"
// Components
import { PageHeading, ProductsSearchForm, Pagination } from "../../components"
//Sections
import { ProductsList } from "../../sections"
// Hooks
import useLoading from "../../Hooks/useLoading";

function Shop() {

    const dispatch = useDispatch();
    const shop = useSelector((state => state.shop));
    const { products, loading, ItemsPerPage, curPage, maxNumOfitems, searchData } = shop;

    useEffect(() => {
        dispatch(loadProducts({ curPage, ItemsPerPage, searchData }))
    }, [ItemsPerPage, curPage])

    useEffect(() => {
        //Debouncing
        let timer = setTimeout(() => {
            dispatch(loadProducts({ curPage, ItemsPerPage, searchData }))
        }, 500)

        dispatch(setTimer(timer))
    }, [searchData])

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