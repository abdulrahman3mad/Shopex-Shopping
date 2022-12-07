import { useEffect, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { register, login, logout } from "../../redux-toolkit/features/authSlice";
import { state, store } from "../../redux-toolkit/store"

import PageHeading from "../../components/PageHeading/PageHeading";
import FormHeading from "../../components/FormHeading/FormHeading";
import AuthForm from "../../sections/AuthForm/AuthForm";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { clearMessage, setMessage } from "../../redux-toolkit/features/authMessage";

function SignUp() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { user: { auth }, authMessage: { message } } = useSelector((state) => state);

    useEffect(() => {
        dispatch(clearMessage());
        dispatch(logout());
    }, [])

    function submitHandler(e) {
        e.preventDefault()
        const toRegisterUser = { name, email, password };
        dispatch(register(toRegisterUser))
    }

    useEffect(() => {
        console.log(auth, message)
        auth && Object.keys(auth).length && navigate("/login")
    }, [auth, message])

    return (
        <>
            <PageHeading heading="My Account" pages={["Home", "Pages", "SignUp"]} />
            <AuthForm onSubmit={submitHandler}>
                <FormHeading heading="Sign Up" subHeading="Please SignUp using account detail bellow." />
                <div className="mt-5">
                    <Input type="text" name="name" value={name} placeholder="Abdo" onChange={setName} required={true} />
                    <Input type="email" name="email" value={email} placeholder="Abdo@gmail.com" onChange={setEmail} err={message} required={true} />
                    {message && <p className="text-clr-accent text-start fs-9 ">{message}</p>}
                    <Input type="password" name="password" value={password} placeholder="12345" onChange={setPassword} required={true} />
                </div>
                <Button val="Sign Up" />
                <p className="text-black-50 mt-3 fs-9">Have an Account? <Link to="/login" className="text-clr-primary accent-clr-hover">Login</Link></p>
            </AuthForm>
        </>
    )
}

export default SignUp;