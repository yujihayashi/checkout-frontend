import { ChangeEventHandler } from "react";

export interface FieldInterface extends RadioInterface {
    label?: string,
    name: string,
    value: string,
    type: string,
    handleChange: ChangeEventHandler<HTMLInputElement>,
}

export interface FieldOptionsInterface {
    label: string,
    value: string
}

export interface RadioInterface {
    options?: FieldOptionsInterface[]
}