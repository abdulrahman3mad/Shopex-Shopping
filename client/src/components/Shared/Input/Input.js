function Input({ type, name, id, value, placeholder, onChange, err, required, classNames, autoFocus}) {
    return (
        <input
            type={type}
            name={name}
            id={id}
            value={value}
            placeholder={placeholder}
            className={`primary-border-focus border w-100 px-2 py-1  ${!classNames && "mb-3"} ${err?.message && "border-accent"} ${classNames}`}
            onChange={(e) => onChange(e.target)}
            required={required}
            autoFocus={autoFocus}
            autoComplete="on"
        />
    )
}

export default Input