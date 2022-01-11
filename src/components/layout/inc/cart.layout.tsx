import Button from "@/components/interface/button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsType } from "config/types";
import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "@/styles/layout/Cart.module.scss";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store.config";

export default function Cart({ isCartOpen, handleCart }: PropsType) {
    const cartRef = useRef<HTMLDivElement>(null)
    const { products } = useSelector((state: RootState) => state.cart);
    useEffect(() => {
        // close the cart when clicked outside
        const body = document.querySelector('body');
        function handleClickOutside(event: any) {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
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
    return (
        <>
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
                    {products.map(p => (<div key={p.id}>{p.title}</div>))}
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