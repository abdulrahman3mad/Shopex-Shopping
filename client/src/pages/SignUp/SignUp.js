// Environment
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import {
    PageHeading, FormHeading, Input, ValidatedInput, Button,
    AuthForm, register, clearMessage, validation
} from "../../Imports/authImports"
import AuthMessage from "../../components/AuthMessage/AuthMessage"


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
    const { user: { user }, authMessage: { message } } = useSelector((state) => state);

    useEffect(() => {
        dispatch(clearMessage());
    }, [])

    useEffect(() => {
        user && Object.keys(user).length && navigate("/login")
    }, [user, message])

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
                {message && <AuthMessage message={message} />}
                <FormHeading heading="Sign Up" subHeading="Please SignUp using account detail bellow." />
                <div className="mt-5">
                    <ValidatedInput err={validationState.name}>
                        <Input type="text" name="name" value={formState.name} placeholder="Abdo" onChange={changeHandler} />
                    </ValidatedInput>

                    <ValidatedInput err={validationState.email}>
                        <Input type="text" name="email" value={formState.email} placeholder="Abdo@gmail.com" onChange={changeHandler} err={message} />
                    </ValidatedInput>

                    <ValidatedInput err={validationState.password}>
                        <Input type="password" name="password" value={formState.password} placeholder="12345" onChange={changeHandler} />
                    </ValidatedInput>
                </div>
                <Button val="Sign Up" />
                <p className="text-black-50 mt-3 fs-9">Have an Account? <Link to="/login" className="text-clr-primary accent-clr-hover">Login</Link></p>
            </AuthForm>
        </>
    )
}

export default SignUp;