import React from "react";
import { PropsType } from "config/types";
import Footer from "./inc/footer.inc";
import Header from "./inc/header.inc";

import globalStyles from "@/styles/layout/Global.module.scss";

export default function CheckoutLayout({ children }: PropsType) {
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