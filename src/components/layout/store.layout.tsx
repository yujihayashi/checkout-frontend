import { Children } from "react";

import Footer from "./inc/footer.inc";
import Header from "./inc/header.inc";
import { PropsType } from "config/types";

import globalStyles from "@/styles/layout/Global.module.scss";

export default function StoreLayout({ children }: { children: PropsType }) {

    return (
        <>
            <Header cart />
            <div className={globalStyles.wrapper}>
                {Children.map(children, (child, i) => {
                    return child
                })}
            </div>
            <Footer />
        </>
    )
}
