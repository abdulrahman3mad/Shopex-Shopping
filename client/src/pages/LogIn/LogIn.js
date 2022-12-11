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
import { login } from "../../redux-toolkit/features/authSlice";
import validation from "../../services/validationService";

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
                    <Input type="text" name="email" value={formState.email} placeholder="Abdo@gmail.com" onChange={changeHandler}/>
                    {validationState?.email && <p className="text-danger text-start mb-4">{validationState?.email}</p>}
                    <Input type="password" name="password" value={formState.password} placeholder="12345" onChange={changeHandler}/>
                    {validationState?.password && <p className="text-danger text-start mb-4">{validationState?.password}</p>}
                </div>
                <a href="#" className="text-black-50 text-start d-block fs-9 accent-clr-hover">Forget your password?</a>
                <Button val="Log In" />
                <p className="text-black-50 mt-3 fs-9">Don't Have an Account? <Link to="/signup" className="text-clr-primary accent-clr-hover">Create account</Link></p>
            </AuthForm>
        </>
    )
}

export default LogIn;