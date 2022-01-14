import { ChangeEventHandler } from "react"

interface Field {
    name?: string,
    variable: string,
    value: string,
    handleChange: ChangeEventHandler<HTMLInputElement>,
}

export default function Field({name, variable, value, handleChange}: Field) {
    return (
        <div className="field__row mb-5">
            <label htmlFor={variable} className="block mb-0.5 text-gray-700">{name}</label>
            <input type="text" id={variable} name={variable} value={value} onChange={handleChange} className="border rounded-lg w-full py-2 px-4" />
        </div>
    )
}