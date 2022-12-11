function AuthMessage({ message }) {
    return (
        <div className="alert alert-danger mb-4" role="alert">
            {message}
        </div>
    )
}

export default AuthMessage