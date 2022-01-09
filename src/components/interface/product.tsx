import { ProductType } from "config/types";
import { formatCurrency } from "helpers/format.helper";
import Image from "next/image";
import Button from "./button";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#e5e5e5" offset="20%" />
      <stop stop-color="#f0f0f0" offset="50%" />
      <stop stop-color="#dedede" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e5e5e5" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export default function Product({ product, col }: { product: ProductType, col?: boolean }) {
    return (
        <div className={`flex flex-col w-full flex-grow border rounded p-4 ${col ? 'flex-wrap justify-center items-center' : ''}`}>
            <header className={`flex flex-col items-center justify-center px-4 ${col ? 'w-full md:h-full md:w-3/12' : ''}`}>
                <div className="relative w-full h-[240px]">
                    <Image src={product.image} alt={product.title} layout="fill"
                        objectFit="contain" loading="lazy" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} />
                </div>
            </header>
            <main className={`py-4 flex flex-col items-center md:items-start ${col ? 'md:mr-auto flex-grow-0 md:w-4/12 ' : 'flex-grow'}`}>
                <span className={`${col ? 'text-xl' : ''}`}>{product.title}</span>
                <span className={`${col ? 'text-4xl' : 'text-2xl'}`}>R$ {formatCurrency(product.price)}</span>

            </main>
            <footer className={`${col ? 'w-full md:w-auto md:mr-auto' : ''}`}>
                <Button className={`w-full ${col ? 'md:w-auto' : ''}`} color="primary">Add to cart</Button>
            </footer>
        </div>
    )
}