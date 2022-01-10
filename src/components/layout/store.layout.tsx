import { PropsType } from "config/types";
import { MouseEventHandler, useState } from "react";
import Footer from "./inc/footer.layout";
import Header from "./inc/header.layout";

export default function StoreLayout({ children }: { children: PropsType }) {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false)

    const handleCart = (bool: boolean) => setIsCartOpen(bool)

    return (
        <>
            <Header handleCart={handleCart} isCartOpen={isCartOpen} />
            <div className="container mx-auto px-6">
                {children}
            </div>
            <Footer />
        </>
    )
}