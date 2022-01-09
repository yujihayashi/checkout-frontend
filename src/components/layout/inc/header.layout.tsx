import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/interface/button'
import Cart from './cart.layout'
import Tag from '@/components/interface/tag'
import { MouseEventHandler } from 'react'

export default function Header({ handleCart, isCartOpen }: { handleCart: MouseEventHandler, isCartOpen: boolean }) {
    return (
        <div>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <span>StoreDotCom</span>
                <div className="relative">
                    <Button onClick={handleCart} color="primary"><><FontAwesomeIcon icon={faShoppingCart} /> <Tag>2</Tag></></Button>
                    {isCartOpen && <Cart handleCart={handleCart} />}
                </div>
            </div>
        </div>
    )
}