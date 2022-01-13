import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/interface/button'
import Cart from './cart.inc'
import Tag from '@/components/interface/tag'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store.config'
import Link from 'next/link'

export default function Header({ handleCart, isCartOpen, cart }: { handleCart?: any, isCartOpen?: boolean, cart?: boolean }) {

    // get the products from redux
    const { counter } = useSelector((state: RootState) => state.cart);
    return (
        <div className="bg-primary text-white">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <span><Link href="/">StoreDotCom</Link></span>
                {cart && <div className="relative">
                    <Button onClick={(e) => { e.preventDefault(); handleCart(!isCartOpen) }} id="cart-button" color="primary-inverse"><><FontAwesomeIcon icon={faShoppingCart} /> <Tag>{counter.toString()}</Tag></></Button>
                    <Cart isCartOpen={isCartOpen} handleCart={handleCart} />
                </div>}
            </div>
        </div>
    )
}