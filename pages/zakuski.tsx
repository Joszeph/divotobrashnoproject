import type { NextPage } from 'next'
import Link from 'next/link'
import ProductsListXs from '../components/ProductsListXs'
import { sanityClient, urlFor } from '../sanity'
import {Zakuski} from '../typings' //interface for TS
import styles from '../styles/Zakuski.module.css'

import{NextSeo} from 'next-seo'

interface Props{
  zakuski: [Zakuski]
}

export default function ZakuskiPage({zakuski}:Props) {

  const SEO = {
    title: "Пекарна Дивото Брашно | Сладки и Солени Закуски",
    description: "Голям Асортимент от Сладки и Солени Закуски | Пекарна Дивото Брашно Варна",

    openGraph:{
        title: "Пекарна Дивото Брашно | Сладки и Солени Закуски",
        description: "Голям Асортимент от Сладки и Солени Закуски | Пекарна Дивото Брашно Варна",
    }
}

  return (
      <main>
        <NextSeo {...SEO} />
          <ProductsListXs />
          <h2 className={styles.h2}>Закуски</h2>
          <h3 className={styles.h3}>сладки и солени</h3>
        <div className={styles.container}>
          {/* {zakuski.map(item=>(
            <Link key={item._id} href={`/zakuski/${item.slug.current}`}>
                <div className={styles.iCard}>
                    <img src={urlFor(item.mainImage).url()!} alt="" />
                    <h4>{item.title}</h4>
                </div>
            </Link>
          ))} */}
      </div>
      </main>
  )
}



export const getServerSideProps = async () => {
  const query = `*[_type == "zakuski"]{
    _id,
    title,
    description,
    mainImage,
    slug
  }`

const zakuski = await sanityClient.fetch(query)
  return{
    props:{
      zakuski
    }
  }
}
