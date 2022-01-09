import { ProductType } from "config/types";
import Product from '@/components/interface/product';

export default function FeaturedProducts({ products }: { products: ProductType[] }) {
    return (
        <div>
            {products.map((p, i) => (
                <div className='w-full flex' key={i}>
                    <Product product={p} col />
                </div>
            ))}
        </div>
    )
}