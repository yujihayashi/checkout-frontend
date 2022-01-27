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

export default function Checkout() {
    // get the products
    const products = useAppSelector(getProducts)

    const handleSubmit = (ev: { [key: string]: any }) => {
        console.log('ev', ev);
        Router.push("/checkout/address")
    }

    return (<CheckoutLayout>
        <Head>
            <title>Checkout</title>
        </Head>
        {products.length > 0 ? (
            <>
                <div className="flex flex-col items-center">
                    <h1>Checkout</h1>
                    <h2 className="mb-4">Personal data</h2>
                    <div className="w-full md:w-1/2">
                        <div className={styles.block}>
                            <Form fields={personalData} handleSubmit={handleSubmit} />
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