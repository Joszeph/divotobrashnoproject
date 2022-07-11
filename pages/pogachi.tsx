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
          <h3 className={styles.h3}>Погачата е неизменна част от онези най-съкровени моменти в живота ни и ние от пекарна Дивото брашно сме щастливи, че можем да бъдем част от Вашия празник. Погачите приготвяме и оформяме ръчно на място по домашна рецепта. Съдържат мляко и яйца, за да Ви напомнят вкуса <span>&#8220;</span>на баба<span>&#8220;</span>. Предлагаме два размера - 1.500 кг и 2.500 кг, както и надпис и украса по Ваше желание според повода. Необходима е предварителна поръчка за погачите,затова не се колебайте да се свържете с нас на тел. 0888/446 116 или на място и заедно да сътворим един незабравим празник!</h3>
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
