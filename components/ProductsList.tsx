import styles from '../styles/ProductList.module.css'
import Link from 'next/link'

const ProductsList = () =>{
    return(
        <div className={styles.productCards}>
        <h2 className={styles.h2} data-aos="zoom-in-up">
            НАШИТЕ ПРОДУКТИ
        </h2>
        <div className={styles.productCardsEl}>
        <Link href="/zakuski">
            <a><div className={styles.product1}>
            <h3 className={styles.h3}>Закуски <br /> сладки и солени</h3>
            </div></a>
        </Link>
        <Link href="/hlqb">
            <a><div className={styles.product2}>
                <h3 className={styles.h3}>Хляб</h3>
            </div></a>
        </Link>
        <Link href="pogachi">
            <a><div className={styles.product3}>
                <h3 className={styles.h3}>Погачи</h3>
            </div></a>
        </Link>
        <Link href="kozunaci">
           <a><div className={styles.product4}>
                <h3 className={styles.h3}>Козунаци</h3>
            </div></a>
        </Link>
        <Link href="/sladki">
            <a><div className={styles.product5}>
                <h3 className={styles.h3}>Сладкарски изделия</h3>
            </div></a>
        </Link>
        <Link href="/napitki">
            <a><div className={styles.product6}>
                <h3 className={styles.h3}>Напитки</h3>
            </div></a>
        </Link>
        </div>
      </div>  
    )
}

export default ProductsList