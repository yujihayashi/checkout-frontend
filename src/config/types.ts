import { MouseEventHandler, ChangeEventHandler } from "react"

export interface FieldInterface {
    label?: string | JSX.Element,
    name: string,
    value?: any | any[],
    type: string,
    handleChange?: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>,
    options?: FieldOptionsInterface[],
    config?: FieldConfigInterface,
    className?: string,
    error?: string,
}

export interface FieldOptionsInterface {
    label: string,
    value: string
}

export interface FieldConfigInterface {
    width?: string,
    info?: string
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
    children?: JSX.Element | JSX.Element[] | string | number,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    [key: string]: any
}