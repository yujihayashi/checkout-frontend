import Link from "next/link";
import { PropsType } from "config/types";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { faCaretUp, faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "@/components/interface/button";
import buttonStyles from "@/styles/components/Button.module.scss";

import styles from "@/styles/layout/Cart.module.scss";

// redux
import { useAppDispatch, useAppSelector } from "@/config/hooks";
import { getCounter, getProducts, getTotal, removeProduct } from "@/store/cart.store";
import CartProducts from "@/components/interface/cart-products";
import Tag from "@/components/interface/tag";

export default function Cart() {
    const [counter, setCounter] = useState(0)
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false)

    const dispatch = useAppDispatch();

    const cartRef = useRef<HTMLDivElement>(null)
    const cartButtonRef = useRef<HTMLButtonElement>(null)

    const total = useAppSelector(getTotal);
    const products = useAppSelector(getProducts);
    const productLength = useAppSelector(getCounter);
    useEffect(() => {
        // close the cart when clicked outside
        const body = document.querySelector('body');
        function handleClickOutside(event: any) {
            if (cartRef.current && !cartRef.current.contains(event.target) && cartButtonRef.current && !cartButtonRef.current.contains(event.target)) {
                handleCart(false)
            }
        }

        // bind the event listener
        body?.addEventListener("mousedown", handleClickOutside);
        return () => {
            // unbind the event listener on clean up
            body?.removeEventListener("mousedown", handleClickOutside);
        };
    }, [cartRef]);

    // to avoid the hydration warning with the js-cookie
    useEffect(() => {
        setCounter(productLength)
    }, [productLength])

    const removeProductFromCart = (id: number) => {
        dispatch(removeProduct(id))
    }

    const handleCart = (bool: boolean) => setIsCartOpen(bool)

    return (
        <>
            <Button forwardedRef={cartButtonRef} onClick={(e) => { e.preventDefault(); handleCart(!isCartOpen) }} id="cart-button" color="primary-inverse"><><FontAwesomeIcon icon={faShoppingCart} /> <Tag>{counter}</Tag></></Button>

            <CSSTransition
                in={isCartOpen} timeout={300} classNames={{
                    enterActive: styles['cart-enter-active'],
                    enter: styles['cart-enter'],
                    exitActive: styles['cart-exit-active'],
                    exit: styles['cart-exit'],
                    exitDone: styles['cart-exit-done']
                }}
                unmountOnExit
            >
                <div ref={cartRef} key={1} className={`${styles.cart} ${styles['cart-enter']}`}>
                    <div className={styles['arrow']}><FontAwesomeIcon icon={faCaretUp} /></div>
                    <div className="p-4">
                        {products.length < 1 && (<p className={styles['empty-message']}>Your cart is empty. Add some products from the store to see them here.</p>)}

                        <CartProducts removeProductFromCart={removeProductFromCart} products={products} />
                    </div>

                    {products.length > 0 && (<div className={styles['cart__subtotal']}>
                        <div className="mb-2">Subtotal: $ {total}</div>
                        <Link href="/checkout" ><a className={`${buttonStyles['secondary']} ${buttonStyles['sm']}`}>Go to checkout</a></Link>
                    </div>)}
                </div>
            </CSSTransition>
            <CSSTransition
                in={isCartOpen} timeout={300} classNames={{
                    enterActive: styles['cart-overlay-enter-active'],
                    enter: styles['cart-overlay-enter'],
                    exitActive: styles['cart-overlay-exit-active'],
                    exit: styles['cart-overlay-exit'],
                    exitDone: styles['cart-overlay-done'],
                }} unmountOnExit>
                <div key={2} className={`${styles['cart-overlay']} ${styles['cart-overlay-enter']}`} onClick={() => handleCart(false)}>
                    <Button color="inherit" className="p-4" title="Close"><FontAwesomeIcon icon={faTimes} /></Button>
                </div>
            </CSSTransition>
        </>
    )
}