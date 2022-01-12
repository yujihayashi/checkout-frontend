import { PropsType } from "config/types";
import Footer from "./inc/footer.inc";
import Header from "./inc/header.inc";

export default function CheckoutLayout({ children }: { children: PropsType }) {
    return (
        <>
            <Header />
            <div className="container mx-auto">
                {children}
            </div>
            <Footer />
        </>
    )
}