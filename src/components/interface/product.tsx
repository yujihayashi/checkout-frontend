import { ProductType } from "config/types";
import { formatCurrency } from "helpers/format.helper";
import Image from "next/image";
import Button from "./button";

export default function Product({ product, col }: { product: ProductType, col: boolean }) {
    return (
        <div className={`flex flex-col w-full flex-grow border rounded p-4 ${col ? 'flex-wrap justify-center items-center' : ''}`}>
            <header className={`flex flex-col items-center justify-center px-4 ${col ? 'w-full md:h-full md:w-3/12' : ''}`}>
                <div className="relative w-full h-[240px]">
                    <Image src={product.image} alt={product.title} layout="fill"
                        objectFit="contain" loading="lazy" />
                </div>
            </header>
            <main className={`py-4 flex flex-col items-center md:items-start ${col ? 'md:mr-auto flex-grow-0 md:w-4/12 ' : 'flex-grow'}`}>
                <span className={`${col ? 'text-xl' : ''}`}>{product.title}</span>
                <span className={`${col ? 'text-4xl' : 'text-2xl'}`}>R$ {formatCurrency(product.price)}</span>

            </main>
            <footer className={`${col ? 'w-full md:w-auto md:mr-auto' : ''}`}>
                <Button className={`w-full ${col ? 'md:w-auto' : ''}`}>Add to cart</Button>
            </footer>
        </div>
    )
}