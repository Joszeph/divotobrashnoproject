import type { NextPage } from 'next'
import Link from 'next/link'
import ProductsListXs from '../components/ProductsListXs'
import { sanityClient, urlFor } from '../sanity'
import {Napitki} from '../typings' //interface for TS
import styles from '../styles/Zakuski.module.css'

import{NextSeo} from 'next-seo'

interface Props{
  napitki: [Napitki]
}

export default function NapitkiPage({napitki}:Props) {

  const SEO = {
    title: "Пекарна Дивото Брашно | Напитки",
    description: "Голям Асортимент от Напитки | Пекарна Дивото Брашно Варна",

    openGraph:{
        title: "Пекарна Дивото Брашно | Напитки",
        description: "Голям Асортимент от Напитки | Пекарна Дивото Брашно Варна",
    }
}
  
  return (
      <main>
        <NextSeo {...SEO} />
          <ProductsListXs />
          <h2 className={styles.h2}>Напитки</h2>
        <div className={styles.container}>
          {napitki.map(item=>(
            <>
              <div className={styles.iCard}>
                  <img src={urlFor(item.mainImage).url()!} alt="" />
                  <h4>{item.title}</h4>
              </div>
            </>
          ))}
      </div>
      </main>
  )
}



export const getServerSideProps = async () => {
  const query = `*[_type == "napitki"]{
    _id,
    title,
    description,
    mainImage,
    slug
  }`

const napitki = await sanityClient.fetch(query)
  return{
    props:{
      napitki
    }
  }
}
