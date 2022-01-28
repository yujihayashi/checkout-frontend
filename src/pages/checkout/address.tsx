import CheckoutLayout from "@/components/layout/checkout.layout";
import { address } from "@/config/fields";
import styles from "@/styles/pages/Checkout.module.scss";
import Form from "@/components/form/form";
import Router from "next/router";
import Steps from "@/components/interface/steps";
import Head from "next/head";

export default function CheckoutAddress() {
    const handleSubmit = (ev: { [key: string]: any }) => {
        console.log('ev', ev);
        Router.push("/checkout/payment")
    }
    return (
        <CheckoutLayout>
            <Head>
                <title>Address - Checkout - StoreDotCom</title>
            </Head>
            <div className="flex flex-col items-center">
                <div className="w-full md:w-1/2">
                    <h1 className="mb-4 text-center text-3xl">Checkout</h1>
                    <Steps step={2} />
                    <div className={styles.block}>
                        <h2 className="mb-4">Nice! Now we&apos;ll need your shipping address!</h2>
                        <Form fields={address} handleSubmit={handleSubmit} />
                    </div>
                </div>
            </div>
        </CheckoutLayout>
    )
}