import React, { useEffect } from "react";
import { PropsType } from "config/types";
import Footer from "./inc/footer.inc";
import Header from "./inc/header.inc";

import globalStyles from "@/styles/layout/Global.module.scss";
import { useAppSelector } from "@/config/hooks";
import { getProducts } from "@/store/cart.store";
import Router from "next/router";

export default function CheckoutLayout({ children }: PropsType) {
    const products = useAppSelector(getProducts)
    
    useEffect(() => {
        if (products.length < 1) {
            Router.push("/cart")
        }
    }, [])

    return (
        <>
            <Header />
            <div className={globalStyles.wrapper}>
                {React.Children.map(children, (child, i) => {
                    return child
                })}
            </div>
            <Footer />
        </>
    )
}