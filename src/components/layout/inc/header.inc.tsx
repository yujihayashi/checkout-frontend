import Link from 'next/link'
import { getCounter } from '@/store/cart.store'
import { useAppSelector } from '@/config/hooks'

import Cart from './cart.inc'
import Tag from '@/components/interface/tag'
import Button from '@/components/interface/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function Header({ handleCart, isCartOpen, cart }: { handleCart?: any, isCartOpen?: boolean, cart?: boolean }) {
    const [counter, setCounter] = useState(0)
    // get the products from redux
    const productLength = useAppSelector(getCounter);

    // to avoid the hydration warning with the js-cookie
    useEffect(() => {
        setCounter(productLength)
    }, [productLength])

    return (
        <div className="bg-primary text-white">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <span><Link href="/"><a title="Go back to homepage">StoreDotCom</a></Link></span>
                {cart && <div className="relative">
                    <Button onClick={(e) => { e.preventDefault(); handleCart(!isCartOpen) }} id="cart-button" color="primary-inverse"><><FontAwesomeIcon icon={faShoppingCart} /> <Tag>{counter}</Tag></></Button>
                    <Cart isCartOpen={isCartOpen} handleCart={handleCart} />
                </div>}
            </div>
        </div>
    )
}
