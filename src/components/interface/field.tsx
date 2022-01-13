interface Field {
    name?: string,
    variable: string
}

export default function Field({name, variable}: Field) {
    return (
        <div className="field__row mb-5">
            <label htmlFor={variable} className="block mb-0.5">{name}</label>
            <input type="text" id={variable} name={variable} className="border rounded w-full py-2 px-6" />
        </div>
    )
}