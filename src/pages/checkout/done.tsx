import Link from "next/link";
import Head from "next/head";
import CheckoutLayout from "@/components/layout/checkout.layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

import buttonStyles from "@/styles/components/Button.module.scss"

export default function Done() {
    return (
        <CheckoutLayout>
            <Head>
                <title>Thanks for your purchase - Checkout - StoreDotCom</title>
            </Head>
            <div className="text-center py-20">
                <div className="text-6xl text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <h1>Thank you for your purchase!</h1>
                <p className="mb-6">Your order number is: 00000001</p>
                <p className="mb-6">
                    We'll send you an e-mail order confirmation with details and tracking info.
                </p>
                <p>
                    <Link href="/"><a className={buttonStyles.primary}>Go back to home</a></Link>
                </p>
            </div>
        </CheckoutLayout>
    )
}