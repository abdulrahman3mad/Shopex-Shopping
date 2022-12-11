function ValidatedInput({children, err}) {
    return (
        <>
            {children}
            {err && <p className="text-danger text-start mb-4">{err}</p>}
        </>
    )
}

export default ValidatedInput