import Shimmer from "@/components/interface/shimmer";
import CheckoutLayout from "@/components/layout/checkout.layout";
import { RootState } from "@/store/store.config";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import buttonStyles from "@/styles/components/Button.module.scss";
import Head from "next/head";
import Field from "@/components/interface/field";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

export default function Checkout() {
    const personalData = [
        { name: "First name", variable: "firstname" },
        { name: "Last name", variable: "lastname" },
        { name: "Phone number", variable: "phone" },
        { name: "E-mail", variable: "email" },
    ]

    const address = [
        { name: "Postal code", variable: "postalcode" },
        { name: "State", variable: "state" },
        { name: "City", variable: "city" },
        { name: "Address 1", variable: "address1" },
        { name: "Address 2", variable: "address2" },
    ]

    const delivery = [
        { variable: "delivery_method" },
    ]

    const payment = [
        { variable: "method" },
        { name: "Card number", variable: "card_number" },
        { name: "Name on the card", variable: "card_name" },
        { name: "Month", variable: "card_month" },
        { name: "Year", variable: "card_year" },
        { name: "CCV", variable: "card_cvv" },
    ]

    const initialState = {
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
    }

    const [state, setState] = useState<any>(initialState)

    const { products, total } = useSelector((state: RootState) => state.cart)

    // change the form values
    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [ev.target.name]: ev.target.value })
    }

    return (<CheckoutLayout>
        <div className="container mx-auto py-10 px-6">
            <Head>
                <title>Checkout</title>
            </Head>
            {products.length > 0 ? (
                <>
                    <h1>Checkout</h1>
                    <div className="flex gap-8">
                        <div className="w-full md:w-1/2">
                            <div className="mb-10">
                                <h2>Personal data</h2>
                                {personalData.map((f, i) => (<div key={i}><Field {...f} handleChange={handleChange} value={state[f.variable]} /></div>))}
                            </div>
                            <div className="mb-10">
                                <h2>Shipping address</h2>
                                {address.map((f, i) => (<div key={i}><Field {...f} handleChange={handleChange} value={state[f.variable]} /></div>))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="mb-10">
                                <h2>Delivery methods</h2>
                                {delivery.map((f, i) => (<div key={i}><Field {...f} handleChange={handleChange} value={state[f.variable]} /></div>))}
                            </div>
                            <div className="mb-10">
                                <h2>Payment methods</h2>
                                {payment.map((f, i) => (<div key={i}><Field {...f} handleChange={handleChange} value={state[f.variable]} /></div>))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Order summary</h2>
                        {products.map(p => (
                            <div key={p.id} className="flex gap-3 items-center py-2 text-sm">
                                <div className="w-2/12 bg-white py-1.5 px-2 rounded">
                                    <div className="relative w-full h-[40px]">
                                        <Image src={p.image} alt={p.title} layout="fill"
                                            objectFit="contain" loading="lazy" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${Shimmer(700, 475)}`} />
                                    </div>
                                </div>
                                <div className="w-9/12">
                                    {p.qty || 1}x {p.title}
                                </div>
                                <div className="w-2/12 flex-shrink-0 text-right">
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