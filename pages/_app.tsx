import Layout from '../components/Layout'
import ScrollToTop from '../components/Scroll'
import '../styles/globals.css'

import{DefaultSeo} from 'next-seo'
import SEO from '../next-seo.config'

interface Props {
  Component?: any;
  pageProps : any
  // any props that come into the component
}

function MyApp({ Component, pageProps }:Props) {
  return (
    <>
    <DefaultSeo {...SEO} />
    <Layout>
      <Component {...pageProps} />
      <ScrollToTop />
    </Layout>
    </>
  )
}

export default MyApp