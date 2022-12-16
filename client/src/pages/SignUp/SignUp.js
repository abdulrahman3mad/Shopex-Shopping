// Environment
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

//Sections && Components
import {
    PageHeading, FormHeading, ValidatedInput, Button,
    AuthForm, register, clearMessage, validation
} from "../../Imports/authImports"
import AuthMessage from "../../components/AuthMessage/AuthMessage"

//Slices
import { setValidationMessage } from "../../redux-toolkit/features/authMessage"


function SignUp() {
    const [formState, setFormState] = useState({
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
        dispatch(setValidationMessage(errors));
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
            <PageHeading heading="My Account" pages={["Home", "SignUp"]} />
            <AuthForm onSubmit={submitHandler}>
                {message && message.authMessage && <AuthMessage message={message.authMessage} />}
                <FormHeading heading="Sign Up" subHeading="Please SignUp using account detail bellow." />
                <div className="mt-5">
                    <ValidatedInput
                        err={message?.validationMessage?.name}
                        value={formState.name}
                        name="name"
                        type="text"
                        onChange={changeHandler}
                        placeholder="username"
                    />

                    <ValidatedInput
                        err={message?.validationMessage?.email}
                        value={formState.email}
                        name="email"
                        type="text"
                        onChange={changeHandler}
                        placeholder="example@gmail.com"
                    />

                    <ValidatedInput
                        err={message?.validationMessage?.password}
                        value={formState.password}
                        name="password"
                        type="password"
                        onChange={changeHandler}
                        placeholder="********"
                    />
                </div>
                <Button val="Sign Up" />
                <p className="text-black-50 mt-3 fs-9">Have an Account? <Link to="/login" className="text-clr-primary accent-clr-hover">Login</Link></p>
            </AuthForm>
        </>
    )
}

export default SignUp;