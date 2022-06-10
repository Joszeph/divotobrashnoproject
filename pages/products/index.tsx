import ProductList from '../../components/ProductsList'

import styles from './products.module.css'

import{NextSeo} from 'next-seo'

const Products = () =>{

    const SEO = {
        title: "Пекарна Дивото Брашно | Продукти",
        description: "Нашите Продукти | Пекарна Дивото Брашно Варна",
    
        openGraph:{
            title: "Пекарна Дивото Брашно | Продукти",
            description: "Нашите Продукти | Пекарна Дивото Брашно Варна",
        }
    }

    return(
        <main>
        <NextSeo {...SEO} />
        <section className={styles.productsEl}>
            <ProductList />
        </section>
    </main>
    )
}

export default Products