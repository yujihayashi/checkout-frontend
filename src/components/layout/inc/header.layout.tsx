import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/interface/button'
import Cart from './cart.layout'
import Tag from '@/components/interface/tag'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store.config'

export default function Header({ handleCart, isCartOpen }: { handleCart: any, isCartOpen: boolean }) {
    
    // get the products from redux
    const { products } = useSelector((state: RootState) => state.cart);
    return (
        <div>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <span>StoreDotCom</span>
                <div className="relative">
                    <Button onClick={(e) => { e.preventDefault(); handleCart(!isCartOpen) }} id="cart-button" color="primary"><><FontAwesomeIcon icon={faShoppingCart} /> <Tag>{products.length.toString()}</Tag></></Button>
                    <Cart isCartOpen={isCartOpen} handleCart={handleCart} />
                </div>
            </div>
        </div>
    )
}