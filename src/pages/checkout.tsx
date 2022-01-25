import Head from "next/head";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

import Field from "@/components/form/field";
import CheckoutLayout from "@/components/layout/checkout.layout";
import styles from "@/styles/pages/Checkout.module.scss";
import buttonStyles from "@/styles/components/Button.module.scss";
import { address, checkoutFormInitialState, CheckoutFormInterface, delivery, payment, personalData } from "@/config/fields";
import { getProducts } from "@/store/cart.store";
import { useAppSelector } from "@/config/hooks";
import CartProducts from "@/components/interface/cart-products";

export default function Checkout() {
    // set the fields in the state
    const [state, setState] = useState<CheckoutFormInterface>(checkoutFormInitialState)

    // get the products
    const products = useAppSelector(getProducts)

    // change the form values
    const handleChange = (ev: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setState({ ...state, [ev.target.name]: ev.target.value })
    }

    return (<CheckoutLayout>
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
                            {personalData.map(({...f}, i) => (<div key={i}><Field {...f} handleChange={handleChange} value={state[f.name]} /></div>))}
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
                <div className="mb-5">
                    <h2>Order summary</h2>
                    <CartProducts products={products} />
                </div>
                <div className="flex justify-center">
                    <div><Link href="/checkout/done"><a className={buttonStyles.primary}>Place order</a></Link></div>
                </div>
            </>
        ) : (<div className="py-20 text-center">
            <p className="mb-3">
                Your cart is empty. Add some products from the store to see them here.
            </p>
            <Link href="/"><a className={`${buttonStyles['secondary']} ${buttonStyles['sm']}`}>Go to the store</a></Link>
        </div>)}
    </CheckoutLayout>)
}