import Image from "next/image"
import Link from 'next/link'
import ProductsList from "../components/ProductsList"
import styles from '../styles/Home.module.css'

import { useEffect } from "react"

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {

    useEffect(() => {
        AOS.init({
          // duration : 5000
        });
      }, []);


  return(
      <main>
            <div className={styles.banner}>
            <div>
                <Image className={styles.mainPicLogo} src="/mainPicLogo2.webp" alt="Дивото Брашно Лого" width="1920" height="650"/>
            </div>
        </div>
        <section className={styles.mainInfo} data-aos="fade-up">
            <h1 className={styles.h1}>Вкусът от едно време е жив <br />
                в центъра на ВАРНА!</h1>
                <h2 className={styles.h2}>
                    Разнообразие от закуски, хлябове, погачи, козунаци и сладки изделия.<br />
Замесени с  УСМИВКА,<br />
Приготвяни от нашите майстори-пекари ВСЕКИ ДЕН,<br />
Изпечени НА МЯСТО<br />
Нека заедно не просто се храним и празнуваме<br />
Нека заедно създаваме сладки СПОМЕНИ!<br />
                </h2>
                <h1 className={styles.h1} >В ПЕКАРНА “ДИВОТО БРАШНО” ЩЕ НАМЕРИТЕ</h1>
        </section>
        <section className={styles.productsEl}>
            <ProductsList />
        </section>
        <section className={styles.bakeries}>
            <div className={styles.bakeriesDiv}>
                <h1 className={styles.h1} data-aos="zoom-in-up">ПЕКАРНИТЕ НИ</h1>
                <div className={styles.bakCards}>
                    <div className={styles.bakCard1}>
                        <Image src="/bak_img_10.webp" alt="Дивото Брашно Пекарна" width="402" height="313"/>
                        <div className={styles.text1}>
                            <address className={styles.address}>Ул. Княз Н. Николаевич 28, <br />
                                Варна (до цветята на Чаталджа)</address>
                        </div>
                    </div>
                    <div className={styles.bakCard2}>
                        <Image src="/bak_img_12.webp" alt="Дивото Брашно Пекарна" width="402" height="312"/>
                        <div className={styles.text2}>
                            <address className={styles.address}>Пазар Чаталджа, обект 80, Варна</address>
                        </div>
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
                    <p><span className={styles.fbicon}><img src="/fb-icon.png" alt="Дивото Брашно FaceBook Link" width="28" height="28"/></span><Link href="https://www.facebook.com/DivotoBrashno" ><a target="_blank">DivotoBrashno</a></Link></p>
                </div> 
            </div>
        </section>
      </main>
  )
}