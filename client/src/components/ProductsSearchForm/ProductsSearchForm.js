import Input from "../Input/Input";
import SelectInput from "../SelectInput/SelectInput";
import { AiOutlineSearch } from "react-icons/ai"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, changeItemsPerPage } from "../../redux-toolkit/features/shopSlice";

function ProductsSearchForm() {

    const [searchValue, SetSearchValue] = useState("");
    const { shop: { ItemsPerPage } } = useSelector((state) => state)
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
            <div className="products-search-form d-flex justify-content-md-between justify-content-center align-items-center">
                <div className="search-bars d-flex align-items-center mb-5 mb-md-0">
                    <div className="input-container d-flex align-items-center me-5">
                        <SelectInput optionValues={[5, 10, 15, 20, 25]} labelTxt="Per Page" defaultValue={10} value={ItemsPerPage} handleSelect={handleSelect} />
                    </div>

                    <div className="input-container product-search position-relative">
                        <Input classNames={"py-1 px-2 accent-border-focus"} value={searchValue} placeholder="Search" onChange={handleSearch} autoFocus={true}/>
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