import { ChangeEvent, FormEvent, useCallback, useRef, useState } from "react"
import { FieldInterface } from "@/config/types"
import Field from "./field";
import Button from "../interface/button";
import { checkoutFormInitialState, CheckoutFormInterface } from "@/config/fields";

interface FormInterface {
    handleSubmit: (ev: { [key: string]: any }) => void,
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

    const thisForm = useRef<HTMLFormElement>(null);

    // set the fields in the state
    const [state, setState] = useState<{ [key: string]: any }>(formData)

    // change the form values
    const handleChange = (ev: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setState({ ...state, [ev.target.name]: ev.target.value })
    }

    const onSubmit = useCallback(function (ev: FormEvent): void {
        ev.preventDefault();
        handleSubmit(state)
    }, [handleSubmit, state])

    return (
        <form onSubmit={onSubmit} ref={thisForm}>
            <div className="flex flex-wrap -mx-2">
                {fields.map((f, i) => <Field {...f} handleChange={handleChange} value={state[f.name]} key={i} className="px-2" />)}
            </div>
            <div className="flex">
                <Button type="submit" color="primary" size="lg">Next</Button>
            </div>
        </form>
    )
}