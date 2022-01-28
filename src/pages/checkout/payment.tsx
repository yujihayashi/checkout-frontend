import CheckoutLayout from "@/components/layout/checkout.layout";
import { payment } from "@/config/fields";
import styles from "@/styles/pages/Checkout.module.scss";
import Form from "@/components/form/form";
import Router from "next/router";
import Steps from "@/components/interface/steps";
import Head from "next/head";

export default function CheckoutPayment() {
    const handleSubmit = (ev: { [key: string]: any }) => {
        console.log('ev', ev);
        Router.push("/checkout/review");
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
                        <h2 className="mb-4">Now select the payment method</h2>
                        <Form fields={payment} handleSubmit={handleSubmit} />
                    </div>
                </div>
            </div>
        </CheckoutLayout>
    )
}