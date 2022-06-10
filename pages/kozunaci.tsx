import type { NextPage } from 'next'
import Link from 'next/link'
import ProductsListXs from '../components/ProductsListXs'
import { sanityClient, urlFor } from '../sanity'
import {Kozunaci} from '../typings' //interface for TS
import styles from '../styles/Zakuski.module.css'

import{NextSeo} from 'next-seo'

interface Props{
  kozunaci: [Kozunaci]
}

export default function ZakuskiPage({kozunaci}:Props) {

  const SEO = {
    title: "Пекарна Дивото Брашно | Козунаци",
    description: "Асортимент от Козунаци | Пекарна Дивото Брашно Варна",

    openGraph:{
        title: "Пекарна Дивото Брашно | Козунаци",
        description: "Асортимент от Козунаци | Пекарна Дивото Брашно Варна",
    }
}

  return (
      <main>
        <NextSeo {...SEO} />
          <ProductsListXs />
          <h2 className={styles.h2}>Козунаци</h2>
        <div className={styles.container}>
          {kozunaci.map(item=>(
            <Link key={item._id} href={`/kozunaci/${item.slug.current}`}>
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
  const query = `*[_type == "kozunaci"]{
    _id,
    title,
    description,
    mainImage,
    slug
  }`

const kozunaci = await sanityClient.fetch(query)
  return{
    props:{
      kozunaci
    }
  }
}
