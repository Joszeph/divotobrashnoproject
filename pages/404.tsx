import Link from 'next/link'

const ErrorPage = () =>{
    return(
     <main>
            <div className="error">
            <h1>Страницата не е намерена. Грешка 404!</h1>
            <Link href="/"><a>oбратно...</a></Link>
        </div>
        <style jsx>{`
            .error{
                max-width: 1200px;
                margin: 0 auto;
                color:#ffcb08;
            }
            .error h1{
                padding: 50px 0 230px 0;
            }
            .error a:hover{
                color:white;
            }
            @media only screen and (max-width: 1239px) {
                main{
                    margin: 0 20px;
                }
            }
        `}</style>
     </main>
    )
}

export default ErrorPage