import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { ChangeEvent, useState } from "react";

import { RootState } from "@/store/store.config";

import Field from "@/components/form/field";
import Shimmer from "@/components/interface/shimmer";
import CheckoutLayout from "@/components/layout/checkout.layout";
import globalStyles from "@/styles/layout/Global.module.scss";
import styles from "@/styles/pages/Checkout.module.scss";
import buttonStyles from "@/styles/components/Button.module.scss";
import cartStyles from "@/styles/layout/Cart.module.scss";

export default function Checkout() {
    const personalData = [
        { label: "First name", name: "firstname", type: "text" },
        { label: "Last name", name: "lastname", type: "text" },
        { label: "Phone number", name: "phone", type: "text" },
        { label: "E-mail", name: "email", type: "text" },
    ]

    const address = [
        { label: "Postal code", name: "postalcode", type: "text" },
        { label: "State", name: "state", type: "text" },
        { label: "City", name: "city", type: "text" },
        { label: "Address 1", name: "address1", type: "text" },
        { label: "Address 2", name: "address2", type: "text" },
    ]

    const delivery = [
        { name: "delivery_method", type: "radio", options: [{ label: "Default carrier", value: "default" }, { label: "Express carrier", value: "express" }] },
    ]

    const payment = [
        { name: "payment_method", type: "radio", options: [{ label: "Credit card", value: "credit_card" }, { label: "Paypal", value: "paypal" }] },
        { label: "Card number", name: "card_number", type: "text" },
        { label: "Name on the card", name: "card_name", type: "text" },
        { label: "Month", name: "card_month", type: "text" },
        { label: "Year", name: "card_year", type: "text" },
        { label: "CCV", name: "card_cvv", type: "text" },
    ]

    interface Form {
        [key:string]: string;
    }

    const initialState = {
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

    const [state, setState] = useState<Form>(initialState)

    const { products, total } = useSelector((state: RootState) => state.cart)

    // change the form values
    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [ev.target.name]: ev.target.value })
    }

    return (<CheckoutLayout>
        <div className={globalStyles.wrapper}>
            <Head>
                <title>Checkout</title>
            </Head>
            {products.length > 0 ? (
                <>
                    <h1>Checkout</h1>
                    <div className="flex gap-8">
                        <div className="w-full md:w-1/2">
                            <div className={styles.block}>
                                <h2>Personal data</h2>
                                {personalData.map((f, i) => (<div key={i}><Field {...f} handleChange={handleChange} value={state[f.name]} /></div>))}
                            </div>
                            <div className={styles.block}>
                                <h2>Shipping address</h2>
                                {address.map((f, i) => (<div key={i}><Field {...f} handleChange={handleChange} value={state[f.name]} /></div>))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className={styles.block}>
                                <h2>Delivery methods</h2>
                                {delivery.map((f, i) => (<div key={i}><Field {...f} handleChange={handleChange} value={state[f.name]} /></div>))}
                            </div>
                            <div className={styles.block}>
                                <h2>Payment methods</h2>
                                {payment.map((f, i) => (<div key={i}><Field {...f} handleChange={handleChange} value={state[f.name]} /></div>))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Order summary</h2>
                        {products.map(p => (
                            <div key={p.id} className={cartStyles['cart__row']}>
                                <div className={cartStyles['cart__img']}>
                                    <div className="relative w-full h-[40px]">
                                        <Image src={p.image} alt={p.title} layout="fill"
                                            objectFit="contain" loading="lazy" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${Shimmer(700, 475)}`} />
                                    </div>
                                </div>
                                <div className={cartStyles['cart__title']}>
                                    {p.qty || 1}x {p.title}
                                </div>
                                <div className={cartStyles['cart__price']}>
                                    $ {p.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (<div className="py-20 text-center">
                <p className="mb-3">
                    Your cart is empty. Add some products from the store to see them here.
                </p>
                <Link href="/"><a className={`${buttonStyles['secondary']} ${buttonStyles['sm']}`}>Go to the store</a></Link>
            </div>)}
        </div>
    </CheckoutLayout>)
}