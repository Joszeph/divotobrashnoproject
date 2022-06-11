
const Footer =()=>{
    return(
        <footer>
        <div className="footerBack"></div>
        <div className="copyR">
            <div className="CopyRText">
                <div>© Дивото Брашно 2022. Всички права запазени.</div>
                <div><a href="mailto:iodesign@live.com">Web Development by ioDesign</a></div>
            </div>
        </div>
        <style jsx>{`
        .footerBack{
            height: 390px;
            width:auto;
            background-image: url('/footer_06.webp');
            background-repeat: no-repeat;
            background-color:#7b7b7b;
            background-size: cover;
            margin-top: 40px;
        }
        
        .copyR{
            background-color: black;
            color: white;
        }
        
        .CopyRText{
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            padding: 5px 0;
        }
        @media only screen and (max-width: 640px){
            .footerBack{
                height: 82px;
            }
        
            .CopyRText {
                font-size: x-small;
            }
        }
        `}</style>
    </footer>    
    )
}

export default Footer