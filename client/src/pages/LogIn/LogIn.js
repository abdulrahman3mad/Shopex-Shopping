// Environment 
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"

// Section && Components 
import {
    PageHeading, FormHeading, ValidatedInput, Button,
    AuthForm, login, clearMessage, validation
} from "../../Imports/authImports"

import BrandsSE from "../../sections/Brands/BrandsSE"

import AuthMessage from "../../components/AuthMessage/AuthMessage"

//Slices
import { setValidationMessage } from "../../redux-toolkit/features/authMessage";


function LogIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formState, setFormState] = useState({
        email: "",
        password: "",
    })

    const { user: { user }, authMessage: { message } } = useSelector((state) => state);

    useEffect(() => {
        dispatch(clearMessage());
    }, [])


    useEffect(() => {
        if (user && Object.keys(user).length) {
            navigate("/")
        }
    }, [user])

    function submitHandler(e) {
        e.preventDefault()
        const [isValid, errors] = validation(formState, { password: "", email: "" })
        dispatch(setValidationMessage(errors));
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
            <PageHeading heading="My Account" pages={["Home", "Login"]} />

            <AuthForm onSubmit={submitHandler}>
                {message && message.authMessage && <AuthMessage message={message.authMessage} />}
                <FormHeading heading="Login" subHeading="Please Login using account detail bellow." />

                <div className="mt-5">
                    <ValidatedInput
                        err={message?.validationMessage?.email}
                        value={formState.email}
                        name="email"
                        type="text"
                        onChange={changeHandler}
                        placeholder="example@gmail.com"
                        required={false}
                    />

                    <ValidatedInput
                        err={message?.validationMessage?.password}
                        value={formState.password}
                        name="password"
                        type="password"
                        onChange={changeHandler}
                        placeholder="********"
                        required={false}
                    />
                </div>

                <Link to="#" className="text-black-50 text-start d-block fs-9 accent-clr-hover">Forget your password?</Link>
                <Button val="Log In" />
                <p className="text-black-50 mt-3 fs-9">Don't Have an Account? <Link to="/signup" className="text-clr-primary accent-clr-hover">Create account</Link>
                </p>
            </AuthForm>

            <BrandsSE />
        </>
    )
}

export default LogIn;