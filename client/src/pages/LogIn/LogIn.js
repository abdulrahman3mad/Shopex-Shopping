import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"

import {
    PageHeading, FormHeading, Input, ValidatedInput, Button,
    AuthForm, login, clearMessage, validation
} from "../../Imports/authImports"
import AuthMessage from "../../components/AuthMessage/AuthMessage"

function LogIn() {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    })

    const [validationState, setValidationState] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate();
    const { user: { user }, authMessage: { message } } = useSelector((state) => state);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearMessage());
    }, [])

    useEffect(() => {
        user && Object.keys(user).length && navigate("/")
    }, [user, message])

    function submitHandler(e) {
        e.preventDefault()
        const [isValid, errors] = validation(formState, { password: "", email: "" })
        setValidationState(errors);
        isValid && dispatch(login(formState))
    }

    function changeHandler(input) {
        setFormState({
            ...formState,
            [input.name]: input.value
        })
    }

    return (
        <>
            <PageHeading heading="My Account" pages={["Home", "Pages", "Login"]} />

            <AuthForm onSubmit={submitHandler}>
                {message && <AuthMessage message={message} />}
                <FormHeading heading="Login" subHeading="Please Login using account detail bellow." />

                <div className="mt-5">
                    <ValidatedInput err={validationState.email}>
                        <Input type="text" name="email" value={formState.email} placeholder="Abdo@gmail.com" onChange={changeHandler} />
                    </ValidatedInput>
                    <ValidatedInput err={validationState.password}>
                        <Input type="password" name="password" value={formState.password} placeholder="12345" onChange={changeHandler} />
                    </ValidatedInput>
                </div>

                <Link to="#" className="text-black-50 text-start d-block fs-9 accent-clr-hover">Forget your password?</Link>
                <Button val="Log In" />
                <p className="text-black-50 mt-3 fs-9">Don't Have an Account? <Link to="/signup" className="text-clr-primary accent-clr-hover">Create account</Link></p>
            </AuthForm>
        </>
    )
}

export default LogIn;