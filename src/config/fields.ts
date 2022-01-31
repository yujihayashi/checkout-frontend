export const personalData = [
    { label: "First name", name: "firstname", type: "text", config: { width: 'w-1/2' } },
    { label: "Last name", name: "lastname", type: "text", config: { width: 'w-1/2' } },
    { label: "Phone number", name: "phone", type: "phone", config: { width: 'w-1/2', info: "Brazilian format" } },
    { label: "E-mail", name: "email", type: "email", config: { width: 'w-1/2' } },
    { label: "Your privacy is important to us. We will only contact you if there is an issue with your order.", name: "email", type: "description" },
]

export const address = [
    { name: "delivery_method", type: "radio", value: 'default', options: [{ label: "Default carrier", value: "default" }, { label: "Express carrier", value: "express" }] },
    { label: "Postal code", name: "postalcode", type: "text" },
    { label: "State", name: "state", type: "text", config: { width: 'w-1/2' } },
    { label: "City", name: "city", type: "text", config: { width: 'w-1/2' } },
    { label: "Address 1", name: "address1", type: "text" },
    { label: "Address 2", name: "address2", type: "text" },
]

export const payment = [
    { name: "payment_method", type: "radio", value: "credit_card", options: [{ label: "Credit card", value: "credit_card" }, { label: "Paypal", value: "paypal" }] },
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
    [key: string]: string,
}

export interface CheckoutDeliveryFormInterface {
    postalcode: string,
    state: string,
    city: string,
    address1: string,
    address2: string,
    delivery_method: string,
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