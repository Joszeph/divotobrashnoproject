import {useEffect} from 'react'
import styles from './gallery.module.css'

import PhotoGallery from '../../components/PhotoGallery'

import AOS from "aos";
import "aos/dist/aos.css";

import{NextSeo} from 'next-seo'

const Gallery = () => {

    const SEO = {
        title: "Пекарна Дивото Брашно | Галерия със Снимки",
        description: "Снимки на Нашите Продукти | Пекарна Дивото Брашно Варна",
    
        openGraph:{
            title: "Пекарна Дивото Брашно | Галерия със Снимки",
            description: "Снимки на Нашите Продукти | Пекарна Дивото Брашно Варна",
        }
    }

   

    useEffect(() => {
        AOS.init({
          // duration : 5000
        });
      }, []);

    return ( 
        <main>
             <NextSeo {...SEO} />
            <div className={styles.container}>
            <h1 className={styles.h1} data-aos="zoom-in-up">ГАЛЕРИЯ</h1>
            <div className={styles.gallery}>
            <PhotoGallery />
            </div>
            </div>
        </main>
     );
}
 
export default Gallery;