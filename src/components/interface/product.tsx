import { ProductType } from "config/types";
import Image from "next/image";
import Button from "./button";

import { useAppDispatch } from "@/config/hooks";
import { addProduct } from "@/store/cart.store";

import Shimmer from "./shimmer";

export default function Product({ product, col }: { product: ProductType, col?: boolean }) {
  const dispatch = useAppDispatch();

  const handleClick = function (product: ProductType) {
    // add the selected product to the cart (redux)
    dispatch(addProduct(product))
  }

  return (
    <div className={`flex flex-col w-full flex-grow border rounded p-4 ${col ? 'flex-wrap justify-center items-center' : ''}`}>
      <header className={`flex flex-col items-center justify-center px-4 ${col ? 'w-full md:h-full md:w-3/12' : ''}`}>
        <div className="relative w-full h-[240px]">
          <Image src={product.image} alt={product.title} layout="fill"
            objectFit="contain" loading="lazy" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${Shimmer(700, 475)}`} />
        </div>
      </header>
      <main className={`py-4 flex flex-col items-center md:items-start ${col ? 'md:mr-auto flex-grow-0 md:w-4/12 ' : 'flex-grow'}`}>
        <span className={`${col ? 'text-xl' : ''}`}>{product.title}</span>
        <span className={`${col ? 'text-4xl' : 'text-2xl'}`}>$ {product.price.toFixed(2)}</span>

      </main>
      <footer className={`${col ? 'w-full md:w-auto md:mr-auto' : ''}`}>
        <Button className={`w-full ${col ? 'md:w-auto' : ''}`} color="primary" onClick={() => handleClick(product)}>Add to cart</Button>
      </footer>
    </div>
  )
}