import CheckoutLayout from "@/components/layout/checkout.layout";
import { address, checkoutFormInitialState, CheckoutFormInterface } from "@/config/fields";
import { ChangeEvent, useCallback, useState } from "react";
import styles from "@/styles/pages/Checkout.module.scss";
import buttonStyles from "@/styles/components/Button.module.scss";
import Field from "@/components/form/field";
import Form from "@/components/form/form";

export default function checkoutAddress() {
    // set the fields in the state
    const [state, setState] = useState<CheckoutFormInterface>(checkoutFormInitialState)
    // change the form values
    const handleChange = (ev: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setState({ ...state, [ev.target.name]: ev.target.value })
    }

    const handleSubmit = useCallback((obj) => (ev: { [key: string]: any }) => {
        console.log('ev', ev);
    }, [])
    return (
        <CheckoutLayout>
            <div className="flex flex-col items-center">
                <h1 className="mb-4">Nice! Now we'll need your shipping address!</h1>
                <div className="w-full md:w-1/2">
                    <div className={styles.block}>
                        <Form fields={address} handleSubmit={handleSubmit} />
                    </div>
                </div>
            </div>
        </CheckoutLayout>
    )
}