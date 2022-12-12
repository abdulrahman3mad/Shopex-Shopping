function SelectInput({ optionValues, labelTxt, value, handleSelect, defaultValue }) {
    return (
        <>
            <label htmlFor="items-per-page">{labelTxt} :</label>
            <select
                className="form-select primary-border-focus ms-3"
                aria-label="Default select example"
                id="items-per-page"
                value={value || defaultValue}
                onChange={(e) => handleSelect(e.target)}
            >
                {optionValues.map((option) => <option key={option} value={option}>{option}</option>)}
            </select >
        </>
    )
}

export default SelectInput