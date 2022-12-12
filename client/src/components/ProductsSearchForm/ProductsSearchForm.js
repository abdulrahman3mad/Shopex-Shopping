import Input from "../Input/Input";
import SelectInput from "../SelectInput/SelectInput";
import { AiOutlineSearch } from "react-icons/ai"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, changeNumOfItems, loadProducts, changeItemsPerPage } from "../../redux-toolkit/features/productsSlice";

function ProductsSearchForm() {
    const [searchValue, SetSearchValue] = useState("");
    const { products: { ItemsPerPage } } = useSelector((state) => state)
    const dispatch = useDispatch();


    function handleSearch(target) {
        SetSearchValue(target.value);
        dispatch(filterProducts(target.value))
    }

    function handleSelect(target) {
        dispatch(changeItemsPerPage(target.value));
    }

    return (
        <>
            <div className="products-search-form d-flex justify-content-between align-items-center">
                <div className="search-heading pt-3">
                    <p className="fw-bold ff-secondary mb-2 text-clr-heading">Ecommerce Acceories & Fashion item</p>
                    <p className="text-black-50 fs-9 mb-0">About 9,620 results (0.62 seconds) </p>
                </div>
                <div className="search-bars d-flex align-items-center">
                    <div className="input-container d-flex align-items-center me-5">
                        <SelectInput optionValues={[5, 10, 15, 20, 25]} labelTxt="Per Page" defaultValue={10} value={ItemsPerPage} handleSelect={handleSelect} />
                    </div>

                    <div className="input-container product-search position-relative">
                        <Input classNames={"py-1 px-2 accent-border-focus"} value={searchValue} placeholder="Search" onChange={handleSearch} />
                        <div className="search-icon position-absolute end-0 translate-middle-x top-0 opacity-50 fs-5">
                            <AiOutlineSearch />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsSearchForm;