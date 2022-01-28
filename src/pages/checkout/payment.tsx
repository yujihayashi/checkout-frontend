import CheckoutLayout from "@/components/layout/checkout.layout";
import { payment } from "@/config/fields";
import styles from "@/styles/pages/Checkout.module.scss";
import Form from "@/components/form/form";
import Router from "next/router";
import Steps from "@/components/interface/steps";
import Head from "next/head";
import { useState } from "react";

export default function CheckoutPayment() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (ev: { [key: string]: any }) => {
        console.log('ev', ev);
        setLoading(true) // show the loading

        // simulating the request to any api
        setTimeout(() => { setLoading(false); Router.push("/checkout/review"); }, 1500)
    }
    return (
        <CheckoutLayout>
            <Head>
                <title>Payment - Checkout - StoreDotCom</title>
            </Head>
            <div className="flex flex-col items-center">
                <div className="w-full md:w-1/2">
                    <h1 className="mb-4 text-center text-3xl">Checkout</h1>
                    <Steps step={3} />
                    <div className={styles.block}>
                        <h2 className="mb-4 text-2xl">Now select the payment method</h2>
                        <Form fields={payment} handleSubmit={handleSubmit} loading={loading} />
                    </div>
                </div>
            </div>
        </CheckoutLayout>
    )
}