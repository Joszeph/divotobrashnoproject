import styles from './contacts.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import{NextSeo} from 'next-seo'

import GoogleMap1 from '../../components/GoogleMap1'
import GoogleMap2 from '../../components/GoogleMap2'

const Contacts = () =>{

    const SEO = {
        title: "Пекарна Дивото Брашно | Контакти",
        description: "Свържете се с Нас | Пекарна Дивото Брашно Варна",
    
        openGraph:{
            title: "Пекарна Дивото Брашно | Контакти",
            description: "Свържете се с Нас | Пекарна Дивото Брашно Варна",
        }
    }

    useEffect(() => {
        AOS.init({
          // duration : 5000
        });
      }, []);


    return(
        <main>
        <NextSeo {...SEO} />
        <section className={styles.bakeries}>
            <div className={styles.bakeriesDiv}>
                <h1 className={styles.h1} data-aos="zoom-in-up">КОНТАКТИ</h1>
                <div className={styles.bakCards}>
                    <div className={styles.bakCard1}>
                        <div className={styles.InfoMap1}>
                        <Image src="/bak_img_10new.webp" alt="Дивото Брашно Пекарна" width={402} height={313}/>
                        <article className={styles.text1}>
                            <address className={styles.address}>Ул. Княз Н. Николаевич 28, <br />
                                Варна (до цветята на Чаталджа)</address>
                        </article>
                        </div>
                            <GoogleMap1 />
                    </div>
                    <div className={styles.bakCard2}>
                        <div className={styles.InfoMap2}>
                        <Image src="/bak_img_12.webp" alt="Дивото Брашно Пекарна" width={402} height={312}/>
                        <article className={styles.text2}>
                            <address className={styles.address}>Пазар Чаталджа, обект 80, Варна</address>
                        </article>
                        </div>
                            <GoogleMap2 />
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.conWork}>
            <div className={styles.conWorkFlex}>
            <div className={styles.workTime}>
                    <ul>
                        <li>Работно време:</li>
                        <li>Понеделник</li>
                        <li>Вторник</li>
                        <li>Сряда</li>
                        <li>Четвъртък</li>
                        <li>Петък</li>
                        <li>Събота</li>
                        <li>Неделя</li>
                    </ul>
                    <ul>
                        <li></li>
                        <li>6:00ч. – 19:00ч.</li>
                        <li>6:00ч. – 19:00ч.</li>
                        <li>6:00ч. – 19:00ч.</li>
                        <li>6:00ч. – 19:00ч.</li>
                        <li>6:00ч. – 19:00ч.</li>
                        <li>6:00ч. – 19:00ч.</li>
                        <li>почивен ден</li>
                    </ul>
                </div>
                <div className={styles.contactDiv}>
                    <h4>За контакти:</h4>
                    <p><a href='tel:0888446116'>Тел.: 0888/446 116</a></p>
                    <p><span className={styles.fbicon}><Image src="/fb-icon.png" alt="" width={28} height={28}/></span><Link href="https://www.facebook.com/DivotoBrashno" ><a target="_blank">DivotoBrashno</a></Link></p>
                </div> 
            </div>
        </section>
    </main>
    )
}

export default Contacts