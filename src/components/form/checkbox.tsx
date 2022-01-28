import { FieldInterface } from "@/config/types";
import { ChangeEvent, useState } from "react";

export default function Checkbox({ options, handleChange, value, label, ...props }: FieldInterface) {
    const [checked, setChecked] = useState(false)
    const handleChecked = function (ev: ChangeEvent<HTMLInputElement>) {
        setChecked(!checked);
        if (handleChange !== undefined)
            handleChange(ev)
    }
    return (
        <label {...props}>
            <input type="checkbox" checked={checked} onChange={handleChecked} /> {label}
        </label>
    )
}