import Button from "@/components/interface/button";
import { faCaretUp, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsType } from "config/types";
import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "@/styles/layout/Cart.module.scss";
import buttonStyles from "@/styles/components/Button.module.scss";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store.config";
import Link from "next/link";
import Image from "next/image";
import Shimmer from "@/components/interface/shimmer";

export default function Cart({ isCartOpen, handleCart }: PropsType) {
    const cartRef = useRef<HTMLDivElement>(null)
    const { products, total } = useSelector((state: RootState) => state.cart);
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
                    <div className={styles['arrow']}><FontAwesomeIcon icon={faCaretUp} /></div>
                    <div className="p-4">
                        {products.length < 1 && (<p className={styles['empty-message']}>Your cart is empty. Add some products from the store to see them here.</p>)}

                        {products.map(p => (
                            <div key={p.id} className="flex gap-3 items-center py-2 text-sm">
                                <div className="w-2/12 bg-white py-1.5 px-2 rounded">
                                    <div className="relative w-full h-[40px]">
                                        <Image src={p.image} alt={p.title} layout="fill"
                                            objectFit="contain" loading="lazy" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${Shimmer(700, 475)}`} />
                                    </div>
                                </div>
                                <div className="w-9/12">
                                    {p.qty || 1}x {p.title}
                                </div>
                                <div className="w-2/12 flex-shrink-0 text-right">
                                    $ {p.price}
                                </div>
                            </div>
                        ))}
                    </div>

                    {products.length > 0 && (<div className="p-4 bg-gray-300 bg-opacity-50 flex flex-col items-end">
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