import { ChangeEvent, FormEvent, useCallback, useRef, useState } from "react"
import { FieldInterface } from "@/config/types"
import Field from "./field";
import Button from "../interface/button";
import { checkoutFormInitialState, CheckoutFormInterface } from "@/config/fields";

interface FormInterface {
    handleSubmit: () => void,
    fields: FieldInterface[]
}

const proxyFields = function (arr: FieldInterface[]) {
    const obj: { [key: string]: any } = {}

    if (arr?.length > 0) {
        arr.forEach(item => {
            obj[item.name] = item.value || ""
        })
    }

    return obj;
}

export default function Form({ handleSubmit, fields = [] }: FormInterface) {
    const formData = proxyFields(fields);

    const thisForm = useRef();

    // set the fields in the state
    const [state, setState] = useState<{ [key: string]: any }>(formData)

    // change the form values
    const handleChange = (ev: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setState({ ...state, [ev.target.name]: ev.target.value })
    }

    const onSubmit = useCallback(function (ev: FormEvent): void {
        ev.preventDefault();
        handleSubmit(state)
    }, [])

    return (
        <form onSubmit={onSubmit} ref={thisForm}>
            {fields.map((f, i) => <Field {...f} handleChange={handleChange} value={state[f.name]} key={i} />)}
            <Button type="submit">Next</Button>
        </form>
    )
}