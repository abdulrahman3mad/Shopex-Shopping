function Button({ val }) {
    return (
        <button type="submit"
            className="w-100 bg-clr-accent text-white border-0 py-2 mt-3 ff-primary fw-semibold">
            {val}
        </button>
    )
}

export default Button;