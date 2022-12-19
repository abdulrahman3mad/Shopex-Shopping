//Environment
import { AiOutlineSearch } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";

//Slices
import { changeItemsPerPage, setSearchData } from "../../redux-toolkit/features/shopSlice";

//Components
import Input from "../Input/Input";
import SelectInput from "../SelectInput/SelectInput";

function ProductsSearchForm() {
    const { shop: { ItemsPerPage, searchData } } = useSelector((state) => state)
    const dispatch = useDispatch();
    
    const handleSearch = (target) => dispatch(setSearchData(target.value));
    const handleSelect = (target) => dispatch(changeItemsPerPage(target.value));

    return (
        <>
            <div className="products-search-form d-flex justify-content-md-between justify-content-center align-items-center">
                <div className="search-bars d-flex align-items-center mb-5 mb-md-0">
                    <div className="input-container d-flex align-items-center me-5">
                        <SelectInput
                            optionValues={[5, 10, 15, 20, 25]}
                            labelTxt="Per Page"
                            defaultValue={10}
                            value={ItemsPerPage}
                            handleSelect={handleSelect} />
                    </div>

                    <div className="input-container product-search position-relative">
                        <Input
                            classNames={"py-0 px-2 accent-border-focus"}
                            value={searchData}
                            placeholder="Search"
                            onChange={handleSearch}
                            autoFocus={true} />
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