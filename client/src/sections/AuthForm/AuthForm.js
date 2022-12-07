function AuthForm({ children, onSubmit }) {
    return (
        <main className="my-5 py-5 text-center">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-5 col-lg-7 col-11 col-md-10">
                        <form onSubmit={onSubmit} className="auth-form p-5">
                            {children}
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AuthForm;