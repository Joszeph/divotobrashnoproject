import type { NextPage } from 'next'
import Link from 'next/link'
import ProductsListXs from '../components/ProductsListXs'
import { sanityClient, urlFor } from '../sanity'
import {Sladki} from '../typings' //interface for TS
import styles from '../styles/Zakuski.module.css'

import{NextSeo} from 'next-seo'

interface Props{
  sladki: [Sladki]
}

export default function SladkiPage({sladki}:Props) {

  const SEO = {
    title: "Пекарна Дивото Брашно | Сладкарски Изделия",
    description: "Голям Асортимент от Сладкарски Изделия | Пекарна Дивото Брашно Варна",

    openGraph:{
        title: "Пекарна Дивото Брашно | Сладкарски Изделия",
        description: "Голям Асортимент от Сладкарски Изделия | Пекарна Дивото Брашно Варна",
    }
}

  return (
      <main>
        <NextSeo {...SEO} />
          <ProductsListXs />
          <h2 className={styles.h2}>Сладкарски изделия</h2>
        <div className={styles.container}>
          {sladki.map(item=>(
            <Link key={item._id} href={`/sladki/${item.slug.current}`}>
                <div className={styles.iCard}>
                    <img src={urlFor(item.mainImage).url()!} alt="" />
                    <h4>{item.title}</h4>
                </div>
            </Link>
          ))}
      </div>
      </main>
  )
}



export const getServerSideProps = async () => {
  const query = `*[_type == "sladki"]{
    _id,
    title,
    description,
    mainImage,
    slug
  }`

const sladki = await sanityClient.fetch(query)
  return{
    props:{
      sladki
    }
  }
}
