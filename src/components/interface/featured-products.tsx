import { ProductType } from "config/types";
import { formatCurrency } from "helpers/format.helper";
import Image from "next/image";
import Button from "./button";
import Product from '@/components/interface/product';

export default function FeaturedProducts({ products }: { products: ProductType[] }) {
    return (
        <div>
            {products.map((p, i) => (
                <div className='w-full flex' key={i}>
                    {/* <div className='flex flex-col w-full flex-grow border rounded p-4'>
                        <header className="flex flex-col items-center justify-center px-4">
                            <div className="relative w-full h-[240px]">
                                <Image src={p.image} alt={p.title} layout="fill"
                                    objectFit="contain" />
                            </div>
                        </header>
                        <main className="flex-grow py-4 flex flex-col">
                            <span className="text-2xl">R$ {formatCurrency(p.price)}</span>
                            <span className="">{p.title}</span>

                        </main>
                        <footer>
                            <Button>Add to cart</Button>
                        </footer>
                    </div> */}
                    <Product product={p} col />
                </div>
            ))}
        </div>
    )
}