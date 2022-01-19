export const personalData = [
    { label: "First name", name: "firstname", type: "text" },
    { label: "Last name", name: "lastname", type: "text" },
    { label: "Phone number", name: "phone", type: "text" },
    { label: "E-mail", name: "email", type: "text" },
]

export const address = [
    { label: "Postal code", name: "postalcode", type: "text" },
    { label: "State", name: "state", type: "text" },
    { label: "City", name: "city", type: "text" },
    { label: "Address 1", name: "address1", type: "text" },
    { label: "Address 2", name: "address2", type: "text" },
]

export const delivery = [
    { name: "delivery_method", type: "radio", options: [{ label: "Default carrier", value: "default" }, { label: "Express carrier", value: "express" }] },
]

export const payment = [
    { name: "payment_method", type: "radio", options: [{ label: "Credit card", value: "credit_card" }, { label: "Paypal", value: "paypal" }] },
    { label: "Card number", name: "card_number", type: "text" },
    { label: "Name on the card", name: "card_name", type: "text" },
    { label: "Month", name: "card_month", type: "text" },
    { label: "Year", name: "card_year", type: "text" },
    { label: "CCV", name: "card_cvv", type: "text" },
]

export interface CheckoutFormInterface {
    firstname: string,
    lastname: string,
    phone: string,
    email: string,
    postalcode: string,
    state: string,
    city: string,
    address1: string,
    address2: string,
    delivery_method: string,
    payment_method: string,
    card_number: string,
    card_name: string,
    card_month: string,
    card_year: string,
    card_cvv: string,
    [key:string]: string,
}

export const checkoutFormInitialState = {
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    postalcode: "",
    state: "",
    city: "",
    address1: "",
    address2: "",
    delivery_method: "default",
    payment_method: "credit_card",
    card_number: "",
    card_name: "",
    card_month: "",
    card_year: "",
    card_cvv: "",
}