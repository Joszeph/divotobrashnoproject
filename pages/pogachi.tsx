import type { NextPage } from 'next'
import Link from 'next/link'
import ProductsListXs from '../components/ProductsListXs'
import { sanityClient, urlFor } from '../sanity'
import {Pogachi} from '../typings' //interface for TS
import styles from '../styles/Zakuski.module.css'

import{NextSeo} from 'next-seo'

interface Props{
  pogachi: [Pogachi]
}

export default function PogachiPage({pogachi}:Props) {

  const SEO = {
    title: "Пекарна Дивото Брашно | Погачи",
    description: "Голям Асортимент от Погачи | Пекарна Дивото Брашно Варна",

    openGraph:{
        title: "Пекарна Дивото Брашно | Погачи",
        description: "Голям Асортимент от Погачи | Пекарна Дивото Брашно Варна",
    }
}

  return (
      <main>
          <NextSeo {...SEO} />
          <ProductsListXs />
          <h2 className={styles.h2}>Погачи</h2>
        <div className={styles.container}>
          {pogachi.map(item=>(
            <Link key={item._id} href={`/pogachi/${item.slug.current}`}>
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
  const query = `*[_type == "pogachi"]{
    _id,
    title,
    description,
    mainImage,
    slug
  }`

const pogachi = await sanityClient.fetch(query)
  return{
    props:{
      pogachi
    }
  }
}
