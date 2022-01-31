import Head from "next/head";

import CheckoutLayout from "@/components/layout/checkout.layout";
import styles from "@/styles/pages/Checkout.module.scss";
import { personalData } from "@/config/fields";
import Form from "@/components/form/form";
import Router from "next/router";
import Steps from "@/components/interface/steps";
import { useState } from "react";

export default function Checkout() {
    const [loading, setLoading] = useState(false);
    // get the products

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
    </CheckoutLayout>)
}