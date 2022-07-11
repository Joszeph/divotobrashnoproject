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
          <h3 className={styles.h3}>Хлябът в нашия бит е незаменим. Той е съществена част от делниците ни, празниците, обредите. В пекарна Дивото брашно вярваме, че хлябът е душа, затова го приготвяме с много внимание и любов. Разбира се,както и останалите ни тестени изделия, хлябът не е в замразено състояние, а е прясно замесен и изпечен всеки ден с качествени брашна и семена, без консерванти и подобрители.</h3>
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
