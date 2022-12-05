function Input({ type, name, id, value, placeholder, onChange }) {
    return (
        <input type={type} name={name} id={id} value={value} placeholder={placeholder} className="border w-100 px-2 py-2 mb-3" onChange={(e)=>onChange(e.target.value)}/>
    )
}

export default Input