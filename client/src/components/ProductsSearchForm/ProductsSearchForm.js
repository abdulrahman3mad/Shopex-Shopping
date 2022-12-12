import Input from "../Input/Input";
import SelectInput from "../SelectInput/SelectInput";
import { AiOutlineSearch } from "react-icons/ai"

function ProductsSearchForm() {
    return (
        <>
            <div className="products-search-form d-flex justify-content-between align-items-center">
                <div className="search-heading pt-3">
                    <p className="fw-bold ff-secondary mb-2 text-clr-heading">Ecommerce Acceories & Fashion item</p>
                    <p className="text-black-50 fs-9 mb-0">About 9,620 results (0.62 seconds) </p>
                </div>
                <div className="search-bars d-flex align-items-center">
                    <div className="input-container d-flex align-items-center me-5">
                        <SelectInput optionValues={[1, 2, 3, 4, 5]} labelTxt="Per Page" defaultValue={1} />
                    </div>

                    <div className="input-container product-search position-relative">
                        <Input classNames={"py-1 px-2 accent-border-focus"} placeholder="Search"/>
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