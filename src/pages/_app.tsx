import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { storeWrapper } from '@/store/store.config'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default storeWrapper.withRedux(MyApp);