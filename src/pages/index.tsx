import Product from '@/components/interface/product';
import FeaturedProducts from '@/components/interface/featured-products';
import StoreLayout from '@/components/layout/store.layout'
import axios from 'axios'
import { ProductType } from 'config/types';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head'

export default function Home({ featured, products }: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <StoreLayout>
      <>
        <Head>
          <title>Store</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <section className="mb-6">
            <h1 className="mb-3">
              Featured product!
            </h1>
            <FeaturedProducts products={featured} />
          </section>
          <section className="mb-6">
            <h2 className="mb-3">
              See more!
            </h2>
            <div className='flex flex-wrap -mx-2'>
              {products.map((p, i) => (
                <div className='w-full md:w-3/12 px-2 mb-4 flex' key={i}><Product product={p} /></div>
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
