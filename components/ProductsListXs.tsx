import styles from '../styles/ProductListXs.module.css'
import Link from 'next/link'

const ProductsListXs = () =>{
    return(
        <div className={styles.productCards}>
        <h2 className={styles.h2}>
            НАШИТЕ ПРОДУКТИ
        </h2>
        <div className={styles.productCardsEl}>
        <Link href="/zakuski">
            <a><div className={styles.product1}>
            <h5 className={styles.h5}>Закуски <br /> сладки и солени</h5>
            </div></a>
        </Link>
        <Link href="/hlqb">
            <a><div className={styles.product2}>
                <h5 className={styles.h5}>Хляб</h5>
            </div></a>
        </Link>
        <Link href="pogachi">
            <a><div className={styles.product3}>
                <h5 className={styles.h5}>Погачи</h5>
            </div></a>
        </Link>
        <Link href="kozunaci">
           <a><div className={styles.product4}>
                <h5 className={styles.h5}>Козунаци</h5>
            </div></a>
        </Link>
        <Link href="/sladki">
            <a><div className={styles.product5}>
                <h5 className={styles.h5}>Сладкарски изделия</h5>
            </div></a>
        </Link>
        <Link href="/napitki">
            <a><div className={styles.product6}>
                <h5 className={styles.h5}>Напитки</h5>
            </div></a>
        </Link>
        </div>
      </div>  
    )
}

export default ProductsListXs