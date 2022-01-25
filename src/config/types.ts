import { MouseEventHandler, ChangeEventHandler } from "react"

export interface FieldInterface extends RadioInterface {
    label?: string,
    name: string,
    value: string,
    type: string,
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>,
}

export interface FieldOptionsInterface {
    label: string,
    value: string
}

export interface RadioInterface {
    options?: FieldOptionsInterface[]
}

export type ProductType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating?: {
        rate: number,
        count: number
    },
    qty?: number
}

export interface PropsType {
    children?: JSX.Element | JSX.Element[] | string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    [key: string]: any
}