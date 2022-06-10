import Link from "next/link";

const Administration = () => {
    return ( 
        <main>
            <div className="container">
            <h1>Административен Панел</h1>
            <Link href=""><a>Вход</a></Link>
            </div>
            <style jsx>{`
                main{
                    max-width:1200px;
                    margin:0 auto;
                    color:#ffcb08;
                }
                .container{
                    padding: 100px 0 200px 0;
                }
                a:hover{
                    color:white;
                }
                @media only screen and (max-width: 1239px) {
                    main{
                        margin: 0 20px;
                    }
                }
            `}</style>
        </main>
     );
}
 
export default Administration;