import CheckoutLayout from "@/components/layout/checkout.layout";
import { address } from "@/config/fields";
import styles from "@/styles/pages/Checkout.module.scss";
import Form from "@/components/form/form";
import Router from "next/router";

export default function CheckoutAddress() {
    const handleSubmit =  (ev: { [key: string]: any }) => {
        console.log('ev', ev);
        Router.push("/checkout/payment")
    }
    return (
        <CheckoutLayout>
            <div className="flex flex-col items-center">
                <h1 className="mb-4">Nice! Now we&apos;ll need your shipping address!</h1>
                <div className="w-full md:w-1/2">
                    <div className={styles.block}>
                        <Form fields={address} handleSubmit={handleSubmit} />
                    </div>
                </div>
            </div>
        </CheckoutLayout>
    )
}