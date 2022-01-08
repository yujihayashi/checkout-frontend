export type ProductType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export type PropsType = {
    children?: JSX.Element | string,
    [key: string]: any
}