const formRegex = {
    name: [/^[a-zA-Z][a-zA-Z0-9]{3,13}[a-zA-Z]$/, "must contain 5 to 15 char and only start and end with a letter"],
    email: [/^[a-zA-Z0-9_\-\.!#$%&'*^]+@[a-zA-Z0-9]+\.[a-zA-Z]+/, "must be a valid email address. ex: example@gmail.com"],
    password: [/[a-zA-Z0-9]{8,}/, "password must contain at least 8 char"],
}

function validation(formState, errors) {
    let isValid = true;
    Object.keys(formState).forEach((input) => {
        const [regex, errMessage] = formRegex[input];
        if (formState[input] === "") errors[input] = `${input} is required`;
        else if (!regex.test(formState[input])) errors[input] = errMessage;
        else errors[input] = "";
    })

    for (let err in errors) if (errors[err] !== "") isValid = false;
    return [isValid, errors];
}

export default validation