import { ProductType, PropsType } from "@/config/types";
import styles from "@/styles/layout/Cart.module.scss";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Button from "./button";
import Shimmer from "./shimmer";

interface CartProductsInterface extends PropsType {
    products: ProductType[],
    removeProductFromCart?: (i: number) => void;
}

export default function CartProducts({ products, removeProductFromCart }: CartProductsInterface) {
    return (<>
        {products.map((p, i) => (
            <div key={p.id} className={styles['cart__row']}>
                <div className={styles['cart__img']}>
                    <div className="relative w-full h-[40px]">
                        <Image src={p.image} alt={p.title} layout="fill"
                            objectFit="contain" loading="lazy" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${Shimmer(700, 475)}`} />
                    </div>
                </div>
                <div className={styles['cart__title']}>
                    {p.qty || 1}x {p.title}
                </div>
                <div className={styles['cart__price']}>
                    $ {p.price.toFixed(2)}
                </div>
                {removeProductFromCart && <div className={styles['cart__actions']}>
                    <Button color="inherit" className="text-danger" title="Remove this product" onClick={() => removeProductFromCart(i)}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                </div>}
            </div>
        ))}
    </>)
}
