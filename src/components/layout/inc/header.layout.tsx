import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/interface/button'

export default function Header() {
    return (
        <div>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <span>StoreDotCom</span>
                <Button><FontAwesomeIcon icon={faShoppingCart} /></Button>
            </div>
        </div>
    )
}