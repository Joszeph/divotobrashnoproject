import type { NextPage } from 'next'
import Link from 'next/link'
import ProductsListXs from '../components/ProductsListXs'
import { sanityClient, urlFor } from '../sanity'
import {Hlqb} from '../typings' //interface for TS
import styles from '../styles/Zakuski.module.css'

import{NextSeo} from 'next-seo'

interface Props{
  hlqb: [Hlqb]
}

export default function HlqbPage({hlqb}:Props) {

  const SEO = {
    title: "Пекарна Дивото Брашно | Хляб",
    description: "Асортимент от Хлябове | Пекарна Дивото Брашно Варна",

    openGraph:{
        title: "Пекарна Дивото Брашно | Хляб",
        description: "Асортимент от Хлябове | Пекарна Дивото Брашно Варна",
    }
}

  return (
      <main>
        <NextSeo {...SEO} />
          <ProductsListXs />
          <h2 className={styles.h2}>Хляб</h2>
        <div className={styles.container}>
          {hlqb.map(item=>(
            <Link key={item._id} href={`/hlqb/${item.slug.current}`}>
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
  const query = `*[_type == "hlqb"]{
    _id,
    title,
    description,
    mainImage,
    slug
  }`

const hlqb = await sanityClient.fetch(query)
  return{
    props:{
      hlqb
    }
  }
}
