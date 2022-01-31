import { FieldInterface } from "@/config/types";
import InputMask from "react-input-mask";

export default function Phone({handleChange, value, ...props}: FieldInterface) {
    return (
        <InputMask value={value} {...props} mask="+55 (99) 99999-9999" onChange={handleChange} />
    )
}