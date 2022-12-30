// Environment
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
//Slices 
import { loadProducts, setCurPage, setTimer } from "redux-toolkit/features/shopSlice"
// Components
import { PageHeading, ProductsSearchForm, Pagination } from "components"
//Sections
import { ProductsList } from "sections"
// Hooks
import { useLoading } from "Hooks";

function Shop() {
    const dispatch = useDispatch();
    const shop = useSelector((state => state.shop));
    const { products, isLoading, ItemsPerPage, curPage, maxNumOfitems, searchData } = shop;

    useEffect(() => {
        dispatch(loadProducts({ curPage, ItemsPerPage, searchData }))
    }, [ItemsPerPage, curPage])

    //Debouncing (Performance Issue)
    useEffect(() => {
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
        />
    )

    return (
        <>
            <PageHeading heading="Our Shop" pages={["Home", "Shop"]} />
            <div className="section-spacing">
                <div className="container">
                    <div className="d-md-flex align-content-center justify-content-between">
                        <ProductsSearchForm />
                        {getPagination()}
                    </div>
                    {useLoading(isLoading, <ProductsList products={products} />)}
                    {getPagination()}
                </div>
            </div>
        </>
    )
}

export default Shop;