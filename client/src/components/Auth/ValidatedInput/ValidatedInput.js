//Components
import {Input} from "components"

function ValidatedInput({ err, name, type, onChange, value, placeholder, required }) {
    return (
        <>
            <Input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} required={required} classNames={"mt-0"}/>
            <p className="text-danger text-start mb-4">{err}</p>
        </>
    )
}

export default ValidatedInput