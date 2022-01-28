import CheckoutLayout from "@/components/layout/checkout.layout";
import styles from "@/styles/pages/Checkout.module.scss";
import Button from "@/components/interface/button";
import Router from "next/router";
import CartProducts from "@/components/interface/cart-products";
import { useAppSelector } from "@/config/hooks";
import { getProducts } from "@/store/cart.store";
import Steps from "@/components/interface/steps";
import Head from "next/head";

export default function CheckoutReview() {
    // get the products
    const products = useAppSelector(getProducts)

    const handleSubmit = () => {
        Router.push("/checkout/done")
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
                        <h2 className="mb-4">Please, review your informations!</h2>
                        <div className="mb-5">
                            <h2>Order summary</h2>
                            <CartProducts products={products} />
                        </div>
                        <div className="flex justify-center">
                            <Button onClick={handleSubmit} color="primary">Confirm and place order</Button>
                        </div>
                    </div>
                </div>
            </div>
        </CheckoutLayout>
    )
}