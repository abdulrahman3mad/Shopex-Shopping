import { useState } from "react"
import {Link} from "react-router-dom"

import PageHeading from "../../components/PageHeading/PageHeading";
import FormHeading from "../../components/FormHeading/FormHeading";
import AuthForm from "../../sections/AuthForm/AuthForm";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

function LogIn() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    return (
        <>
            <PageHeading heading="My Account" pages={["Home", "Pages", "Login"]} />
            <AuthForm>
                <FormHeading heading="Login" subHeading="Please Login using account detail bellow." />
                <div className="mt-5">
                    <Input type="email" name="email" value={email} placeholder="Abdo@gmail.com" onChange={setEmail} />
                    <Input type="password" name="password" value={password} placeholder="12345" onChange={setPassword} />
                </div>
                <a href="#" className="text-black-50 text-start d-block fs-9 accent-clr-hover">Forget your password?</a>
                <Button val="Log In" />
                <p className="text-black-50 mt-3 fs-9">Don't Have an Account? <Link to="/signup" className="text-clr-primary accent-clr-hover">Create account</Link></p>
            </AuthForm>
        </>
    )
}

export default LogIn;