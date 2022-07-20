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
          <h3 className={styles.h3}>Козунакът е свещен символ в християнската култура и нашата гордост в пекарна Дивото брашно. Годините и опитът са ни показали, че козунакът се е превърнал в любима част от трапезата на мнозина от Вас не само на Великден. Ето защо ние предлагаме козунак целогодишно. При нас може да го откриете във витрините всеки ден или разбира се да поръчате предварително на тел. 0888/446 116 или на място желания от Вас размер и вкус. Козунаците,които предлагаме са в два размера - 350г и 550г. Замесени с чисти продукти, без консерванти, подобрители и сухи смеси, нашите козунаци са истинска наслада на конци!</h3>
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
