import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"

import { clearMessage } from "../../redux-toolkit/features/authMessage";
import PageHeading from "../../components/PageHeading/PageHeading";
import FormHeading from "../../components/FormHeading/FormHeading";
import AuthForm from "../../sections/AuthForm/AuthForm";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { login, logout } from "../../redux-toolkit/features/authSlice";
import { store } from "../../redux-toolkit/store";

function LogIn() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { user: { auth }, authMessage: { message } } = useSelector((state) => state);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearMessage());
    }, [])

    useEffect(() => {
        auth && Object.keys(auth).length && navigate("/")
    }, [auth, message])

    function submitHandler(e) {
        e.preventDefault()
        dispatch(login({ email, password }))
    }

    return (
        <>
            <PageHeading heading="My Account" pages={["Home", "Pages", "Login"]} />
            <AuthForm onSubmit={submitHandler}>
                {
                    message &&
                    (
                        <div className="alert alert-danger mb-4" role="alert">
                            {message}
                        </div>
                    )
                }
                <FormHeading heading="Login" subHeading="Please Login using account detail bellow." />
                <div className="mt-5">
                    <Input type="email" name="email" value={email} placeholder="Abdo@gmail.com" onChange={setEmail} required={true} />
                    <Input type="password" name="password" value={password} placeholder="12345" onChange={setPassword} required={true} />
                </div>
                <a href="#" className="text-black-50 text-start d-block fs-9 accent-clr-hover">Forget your password?</a>
                <Button val="Log In" />
                <p className="text-black-50 mt-3 fs-9">Don't Have an Account? <Link to="/signup" className="text-clr-primary accent-clr-hover">Create account</Link></p>
            </AuthForm>
        </>
    )
}

export default LogIn;