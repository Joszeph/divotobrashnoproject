import { GetStaticProps } from "next"
import { sanityClient, urlFor } from "../../sanity"
import PortableText from "react-portable-text"
import{Hlqb} from '../../typings'
import styles from '../../styles/ProductDetails.module.css'
import Link from 'next/link'

interface Props {
    post: Hlqb;
}

function PostHlqb({post}:Props) {
    
  return (
   <main className={styles.main}>
        <div className={styles.about}>
            <div className={styles.aboutEl}>  
                <div className={styles.backBtnRes}><Link href="/hlqb"><a>назад</a></Link></div>
                <div className={styles.aboutImg}>
                <img className={styles.imgProduct} src={urlFor(post.mainImage).url()!} alt="" />
                    <div className={styles.circle}></div> 
                </div>
                <div className={styles.divConText}>
                <article className={styles.aboutText}>
                    <h3 className={styles.h3}>{post.title}</h3>
                    <h4 className={styles.h4}>Състав:</h4>
                    <PortableText
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                    projectId= {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!} 
                    content = {post.body}/>
                    <div className={styles.backBtn}><Link href="/hlqb"><a>назад</a></Link></div>
                </article>
                </div>
            </div>
        </div>
   </main>
  )
}

export default PostHlqb



export const getStaticPaths = async () => {
    const query = `*[_type == "hlqb"]{
        _id,
        slug{
            current
        }
    }`

    const posts = await sanityClient.fetch(query)

    const paths = posts.map((post: Hlqb)=>({
        params:{
            slug: post.slug.current,
        }
    }))

    return{
        paths,
        fallback:"blocking"
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const query = `*[_type == "hlqb" && slug.current == $slug][0]{
        _id,
        createdAt,
        title,
        description,
        mainImage,
        slug,
        body,
        'comments':*[
            _type == "comment" &&
            post._ref == ^._id &&
            approved == true
        ]
    }`

    const post = await sanityClient.fetch(query,{
        slug: params?.slug,
    })

    if(!post){
        return{
            notFound:true
        }
    }

    return{
        props:{
            post,
        },
        revalidate:60, //after 60 seconds, It'll update the old cache d version
    }
}