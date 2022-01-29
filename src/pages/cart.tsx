import StoreLayout from "@/components/layout/store.layout";
import Link from "next/link";
import buttonStyles from "@/styles/components/Button.module.scss"

export default function CartPage() {
    return (<StoreLayout>
        <div className="py-20 text-center">
            <p className="mb-3">
                Your cart is empty. Add some products from the store to see them here.
            </p>
            <Link href="/"><a className={`${buttonStyles['secondary']} ${buttonStyles['sm']}`}>Go to the store</a></Link>
        </div>
    </StoreLayout>)
}