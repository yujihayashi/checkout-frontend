import CheckoutLayout from "@/components/layout/checkout.layout";
import styles from "@/styles/pages/Checkout.module.scss";
import Button from "@/components/interface/button";
import Router from "next/router";
import CartProducts from "@/components/interface/cart-products";
import { useAppSelector } from "@/config/hooks";
import { getProducts } from "@/store/cart.store";

export default function checkoutReview() {
    // get the products
    const products = useAppSelector(getProducts)

    const handleSubmit = () => {
        Router.push("/checkout/done")
    }
    return (
        <CheckoutLayout>
            <div className="flex flex-col items-center">
                <h1 className="mb-4">Please, review your informations!</h1>
                <div className="w-full md:w-1/2">
                    <div className={styles.block}>
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