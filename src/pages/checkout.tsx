import Head from "next/head";
import Link from "next/link";

import CheckoutLayout from "@/components/layout/checkout.layout";
import styles from "@/styles/pages/Checkout.module.scss";
import buttonStyles from "@/styles/components/Button.module.scss";
import { personalData } from "@/config/fields";
import { useAppSelector } from "@/config/hooks";
import { getProducts } from "@/store/cart.store";
import Form from "@/components/form/form";
import Router from "next/router";
import Steps from "@/components/interface/steps";
import { useState } from "react";

export default function Checkout() {
    const [loading, setLoading] = useState(false);
    // get the products
    const products = useAppSelector(getProducts)

    const handleSubmit = (ev: { [key: string]: any }) => {
        console.log('ev', ev);
        setLoading(true) // show the loading

        // simulating the request to any api
        setTimeout(() => { setLoading(false); Router.push("/checkout/address"); }, 1500)
    }

    return (<CheckoutLayout>
        <Head>
            <title>Personal data - Checkout - StoreDotCom</title>
        </Head>
        {products.length > 0 ? (
            <>
                <div className="flex flex-col items-center">
                    <div className="w-full md:w-1/2">
                        <h1 className="mb-4 text-center text-3xl">Checkout</h1>
                        <Steps step={1} />
                        <div className={styles.block}>
                            <div className="mb-4">
                                <h2 className="text-2xl">Personal data</h2>
                                <p>First we need informations about you to proceed.</p>
                            </div>
                            <Form fields={personalData} handleSubmit={handleSubmit} loading={loading} />
                        </div>
                    </div>
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