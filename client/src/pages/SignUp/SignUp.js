import { useState } from "react"
import {Link} from "react-router-dom"

import PageHeading from "../../components/PageHeading/PageHeading";
import FormHeading from "../../components/FormHeading/FormHeading";
import AuthForm from "../../sections/AuthForm/AuthForm";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

function SignUp() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    return (
        <>
            <PageHeading heading="My Account" pages={["Home", "Pages", "SignUp"]} />
            <AuthForm>
                <FormHeading heading="Sign Up" subHeading="Please SignUp using account detail bellow." />
                <div className="mt-5">
                    <Input type="text" name="name" value={name} placeholder="Abdo" onChange={setName}/>
                    <Input type="email" name="email" value={email} placeholder="Abdo@gmail.com" onChange={setEmail}/>
                    <Input type="password" name="password" value={password} placeholder="12345" onChange={setPassword}/>
                </div>
                <Button val="Sign Up" />
                <p className="text-black-50 mt-3 fs-9">Have an Account? <Link to="/login" className="text-clr-primary accent-clr-hover">Login</Link></p>
            </AuthForm>
        </>
    )
}

export default SignUp;