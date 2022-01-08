import { PropsType } from "config/types";
import Footer from "./inc/footer.layout";
import Header from "./inc/header.layout";

export default function StoreLayout({ children }: { children: PropsType }) {
    return (
        <>
            <Header />
            <div className="container mx-auto px-6">
                {children}
            </div>
            <Footer />
        </>
    )
}