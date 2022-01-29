import React, { useState } from "react";

import Footer from "./inc/footer.inc";
import Header from "./inc/header.inc";
import { PropsType } from "config/types";

import globalStyles from "@/styles/layout/Global.module.scss";

export default function StoreLayout({ children }: { children: PropsType }) {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false)

    const handleCart = (bool: boolean) => setIsCartOpen(bool)

    return (
        <>
            <Header handleCart={handleCart} isCartOpen={isCartOpen} cart />
            <div className={globalStyles.wrapper}>
                {React.Children.map(children, (child, i) => {
                    return child
                })}
            </div>
            <Footer />
        </>
    )
}
