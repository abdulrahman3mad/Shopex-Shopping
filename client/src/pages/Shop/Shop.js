// Environment
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadProducts, setCurPage } from "../../redux-toolkit/features/shopSlice"

// Components
import PageHeading from "../../components/PageHeading/PageHeading"
import ProductsSearchForm from "../../components/ProductsSearchForm/ProductsSearchForm"
import Pagination from "../../components/Pagination/Pagination";

//Sections
import ProductsList from "../../sections/ProductsList/ProductsList"

function Shop() {
    const dispatch = useDispatch();
    const { shop: { products, loading, err, ItemsPerPage, curPage, maxNumOfitems, searchData } } = useSelector((state => state));

    useEffect(() => {
        if(searchData) dispatch(setCurPage(1));
        dispatch(loadProducts({ curPage, ItemsPerPage, searchData }))
    }, [ItemsPerPage, curPage, searchData])

    function handleSliding(curPage) {
        dispatch(setCurPage(curPage));
    }

    return (
        <>
            <PageHeading heading="Our Shop" pages={["Home", "Shop"]} />
            <div className="section-spacing">
                <div className="container">
                    <div className="d-md-flex  align-content-center justify-content-between">
                        <ProductsSearchForm />
                        <Pagination
                            maxNumOfitems={maxNumOfitems}
                            ItemsPerPage={ItemsPerPage}
                            handleSliding={handleSliding}
                        />
                    </div>
                    {
                        loading ? (< div className="text-center"><img src="images/loading.gif" alt="loading"></img></div>)
                            : (<ProductsList
                                products={products} />)
                    }

                    <Pagination
                        maxNumOfitems={maxNumOfitems}
                        ItemsPerPage={ItemsPerPage}
                        handleSliding={handleSliding}
                    />
                </div>
            </div>
        </>
    )
}

export default Shop;