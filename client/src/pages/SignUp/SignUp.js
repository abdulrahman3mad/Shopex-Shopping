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
import validation from "../../services/validationService";

function SignUp() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [validationState, setValidationState] = useState({
        name: "",
        email: "",
        password: "",
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user: { auth }, authMessage: { message } } = useSelector((state) => state);

    useEffect(() => {
        dispatch(clearMessage());
    }, [])

    useEffect(() => {
        auth && Object.keys(auth).length && navigate("/login")
    }, [auth, message])

    function submitHandler(e) {
        e.preventDefault()
        const [isValid, errors] = validation(formState, { name: "", password: "", email: "" })
        setValidationState(errors);
        isValid && dispatch(register(formState))
    }

    function changeHandler(input) {
        setFormState({
            ...formState,
            [input.name]: input.value
        })
    }

    return (
        <>
            <PageHeading heading="My Account" pages={["Home", "Pages", "SignUp"]} />
            <AuthForm onSubmit={submitHandler}>
                {
                    message &&
                    (
                        <div className="alert alert-danger mb-4" role="alert">
                            {message}
                        </div>
                    )
                }
                <FormHeading heading="Sign Up" subHeading="Please SignUp using account detail bellow." />
                <div className="mt-5">
                    <Input type="text" name="name" value={formState.name} placeholder="Abdo" onChange={changeHandler} />
                    {validationState?.name && <p className="text-danger text-start mb-4">{validationState?.name}</p>}

                    <Input type="text" name="email" value={formState.email} placeholder="Abdo@gmail.com" onChange={changeHandler} err={message} />
                    {validationState?.email && <p className="text-danger text-start mb-4">{validationState?.email}</p>}
                    
                    <Input type="password" name="password" value={formState.password} placeholder="12345" onChange={changeHandler} />
                    {validationState?.password && <p className="text-danger text-start mb-4">{validationState?.password}</p>}
                </div>
                <Button val="Sign Up" />
                <p className="text-black-50 mt-3 fs-9">Have an Account? <Link to="/login" className="text-clr-primary accent-clr-hover">Login</Link></p>
            </AuthForm>
        </>
    )
}

export default SignUp;