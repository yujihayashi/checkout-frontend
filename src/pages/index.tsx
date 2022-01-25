import Product from '@/components/interface/product';
import FeaturedProducts from '@/components/interface/featured-products';
import StoreLayout from '@/components/layout/store.layout'
import axios from 'axios'
import { ProductType } from 'config/types';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head'
import { ChangeEvent, useEffect, useState } from 'react';
import Field from '@/components/form/field';

export default function Home({ featured, products }: InferGetServerSidePropsType<typeof getStaticProps>) {
  const [sort, setSort] = useState<string>('featured');
  const [orderedProducts, setOrderedProducts] = useState<ProductType[]>([])

  // TODO -> Refactor this code cuz the products prop is mutating :(
  useEffect(() => {
    setOrderedProducts(products.sort((a, b) => a.id - b.id));
  }, [])

  const handleSort = function (ev: ChangeEvent<HTMLSelectElement>) {
    setSort(ev.target.value)
    switch (ev.target.value) {
      case 'low-price':
        setOrderedProducts(products.sort((a, b) => a.price - b.price))
        break;
      case 'high-price':
        setOrderedProducts(products.sort((a, b) => a.price - b.price).reverse())
        break;
      case 'featured':
      default:
        setOrderedProducts(products.sort((a, b) => a.id - b.id));
        break;
    }
  }

  return (
    <StoreLayout>
      <>
        <Head>
          <title>Store</title>
        </Head>

        <main className="py-10">
          <section className="mb-6">
            <h1 className="mb-3">
              Featured product!
            </h1>
            <FeaturedProducts products={featured} />
          </section>
          <section className="mb-6">
            <div className="flex justify-between">
              <div>
                <h2 className="mb-3">
                  See more!
                </h2>
              </div>
              <div className="text-right">
                <Field label="Sort by" name="sort" value={sort} type="select" options={[{ label: 'Featured', value: 'featured' }, { label: 'Price: Low to hight', value: 'low-price' }, { label: 'Price: High to low', value: 'high-price' }]} handleChange={handleSort} />
              </div>
            </div>
            <div className='flex flex-wrap -mx-2'>
              {orderedProducts.map((p, i) => (
                <div className='w-full sm:w-6/12 md:w-4/12 lg:w-3/12 px-2 mb-4 flex' key={i}><Product product={p} /></div>
              ))}
            </div>
          </section>
        </main>
      </>
    </StoreLayout>
  )
}

export async function getStaticProps() {
  const products: ProductType[] = await axios.get('https://fakestoreapi.com/products').then(({ data }) => data);
  const featured: ProductType[] = products.filter(p => /* p.id === 4 || p.id === 10 || */ p.id === 18);
  return {
    props: {
      featured,
      products
    }
  }
}
