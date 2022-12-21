function FormHeading({ heading, subHeading }) {
    return (
        <div className="form-heading">
            <h3 className="fw-bold fs-2 ff-primary">{heading}</h3>
            <p className="text-black-50 fs-9 ">{subHeading}</p>
        </div>
    )
}


export default FormHeading;