import Document, {Html, Head, Main, NextScript} from 'next/document'

// interface Props {
//     ctx?: any

//     // any props that come into the component
//   }

class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx)
    //     return {...initialProps}
    // }

    render() {
        return (
            <Html lang="bg">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preload"/>
                <meta name="theme-color" content="#33333"/>
                <meta property="og:image" content="https://www.divotobrashno.com/_next/image?url=%2Fmain_top_logo.png&w=256&q=75"/>
                <meta property="og:image:type" content="image/png"/>
                <meta property="og:image:width" content="228"/>
                <meta property="og:image:height" content="122"/>
                <meta name="description" content="В пекарна Дивото Брашно ще намерите, голямо разнообразие от изпечени на място, закуски, хлябове, погачи, козунаци и сладкарски изделия."/>
                <meta property="og:title" content="В пекарна Дивото Брашно ще намерите, голямо разнообразие от изпечени на място, закуски, хлябове, погачи, козунаци и сладкарски изделия." />
                <meta property="og:url" content="www.divotobrashno.com" />
                <meta property="og:type" content="website" />
            </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument