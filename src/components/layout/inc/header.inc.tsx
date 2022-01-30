import Link from 'next/link'
import Cart from './cart.inc'

export default function Header({ cart }: { handleCart?: any, isCartOpen?: boolean, cart?: boolean }) {
    return (
        <div className="bg-primary text-white top-0 sticky z-30">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <span><Link href="/"><a title="Go back to homepage">StoreDotCom</a></Link></span>
                {cart && <div className="relative">
                    <Cart />
                </div>}
            </div>
        </div>
    )
}
