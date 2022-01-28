import CheckoutLayout from "@/components/layout/checkout.layout";
import styles from "@/styles/pages/Checkout.module.scss";
import Button from "@/components/interface/button";
import Router from "next/router";
import CartProducts from "@/components/interface/cart-products";
import { useAppSelector } from "@/config/hooks";
import { getProducts, getTotal } from "@/store/cart.store";
import Steps from "@/components/interface/steps";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import Loading from "@/components/interface/loading";
import Field from "@/components/form/field";

export default function CheckoutReview() {
    const products = useAppSelector(getProducts); // get the products
    const total = useAppSelector(getTotal); // get total value
    const [loading, setLoading] = useState(false);
    const [terms, setTerms] = useState(false);

    const handleTerms = (ev: ChangeEvent<HTMLInputElement>) => {
        setTerms(ev.target.checked)
    }

    const handleSubmit = () => {
        setLoading(true);

        // simulating the request to any api
        setTimeout(() => { setLoading(false); Router.push("/checkout/done") }, 1500)
    }


    return (
        <CheckoutLayout>
            <Head>
                <title>Reivew your informations - Checkout - StoreDotCom</title>
            </Head>
            <div className="flex flex-col items-center">
                <div className="w-full md:w-1/2">
                    <h1 className="mb-4 text-center text-3xl">Checkout</h1>
                    <Steps step={4} />
                    <div className={styles.block}>
                        <h2 className="mb-4 text-2xl">Please, review your information!</h2>
                        <div className="mb-5 pb-5 border-b">
                            <h3 className="text-lg">Personal data</h3>
                        </div>
                        <div className="mb-5 pb-5 border-b">
                            <h3 className="text-lg">Shipping address</h3>
                        </div>
                        <div className="mb-5 pb-5 border-b">
                            <h3 className="text-lg">Payment method</h3>
                        </div>
                        <div className="mb-5">
                            <h3 className="text-lg">Order summary</h3>
                            <CartProducts products={products} />
                            <div className="mb-2 text-right">Subtotal: $ {total}</div>
                        </div>
                        <div>
                            <Field type="checkbox" name="terms" label="I accept the tems and conditions" value={terms} handleChange={handleTerms} />
                        </div>
                        <div className="flex justify-center">

                            <Button onClick={handleSubmit} color="primary">
                                {loading ? <Loading text="Placing the order" /> : 'Confirm and place order'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </CheckoutLayout>
    )
}