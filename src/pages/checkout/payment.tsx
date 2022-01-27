import CheckoutLayout from "@/components/layout/checkout.layout";
import { payment } from "@/config/fields";
import styles from "@/styles/pages/Checkout.module.scss";
import Form from "@/components/form/form";
import Router from "next/router";

export default function CheckoutPayment() {
    const handleSubmit =  (ev: { [key: string]: any }) => {
        console.log('ev', ev);
        Router.push("/checkout/review");
    }
    return (
        <CheckoutLayout>
            <div className="flex flex-col items-center">
                <h1 className="mb-4">Now select the payment method</h1>
                <div className="w-full md:w-1/2">
                    <div className={styles.block}>
                        <Form fields={payment} handleSubmit={handleSubmit} />
                    </div>
                </div>
            </div>
        </CheckoutLayout>
    )
}