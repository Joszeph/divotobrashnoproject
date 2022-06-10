import Link from 'next/link'
import Dropdown from './Dropdown'
import Image from 'next/image';
import {useState} from 'react'
import{useRouter} from "next/router"

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };

    const router = useRouter()
  
    return (
      <>
      <div className="topDiv">
            <span className="topTel"><a href='tel:0888446116'>Тел.: 0888 / 446 116</a></span>
        </div>
        <nav className='navbar'>
          <Link href='/' className='navbar_logo'>
          <a onClick={() => closeMobileMenu}>
          <Image src="/main_top_logo.png" alt="Дивото Брашно Лого" width={248} height={139} quality={50}/>
            </a>
          </Link>
          
          <div className='menu_icon' onClick={handleClick}>
          {click ? <span><img src='/closeBtn.png'></img></span> : <span><img src='/burgerBtn.png'></img></span> }
          </div>
         
          <ul className={click ? 'nav_menu active' : 'nav_menu'}>

            <li className={router.pathname == "/" ? "active" : "nav_links"} onClick={handleClick}>
              <Link href='/' className='nav_links' >
              <a className='linkColor' onClick={() => closeMobileMenu}>
                НАЧАЛО
                </a>
              </Link>
            </li>

            <li onClick={handleClick}
              className={router.pathname == "/products" ? "active" : "nav_links"}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link href='/products' className='nav_links'>
                <a className='linkColor' onClick={() => closeMobileMenu}> ПРОДУКТИ </a>
              </Link>
              {dropdown && <Dropdown />}
            </li>


            <li className={router.pathname == "/aboutUs" ? "active" : "nav_links"} onClick={handleClick}>
              <Link href='/aboutUs' >
                   <a className='linkColor' onClick={() => closeMobileMenu}> ЗА НАС </a>
              </Link>
            </li>



            <li className={router.pathname == "/gallery" ? "active" : "nav_links"} onClick={handleClick}>
              <Link href='/gallery' className='nav_links'>
                <a className='linkColor' onClick={() => closeMobileMenu}> ГАЛЕРИЯ </a>
              </Link>
            </li>

            <li className={router.pathname == "/contacts" ? "active" : "nav_links"} onClick={handleClick}>
              <Link href='/contacts' className='nav_links'>
                <a className='linkColor' onClick={() => closeMobileMenu}> КОНТАКТИ </a>
              </Link>
            </li>
          </ul>
        </nav>
        <style>{`
        .topDiv{
            background-color:#ffcb08; 
        }
        .topTel{
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: flex-end;
            font-size: small;
        }
        .navbar {
            background-color: #7b7b7b;
            display: flex;
            align-items: center;
            font-size: 1.2rem;
            font-weight: bold;
            color:white;
            justify-content: center;
            max-width: 1200px;
            margin: 0 auto;
            margin-top:10px;
            margin-bottom: 10px;
        }
          
          .navbar_logo {
            color: #fff;
            cursor: pointer;
            text-decoration: none;
            margin-top:50px;
          }
          
          .nav_menu {
            display: grid;
            grid-template-columns: repeat(5, auto);
            grid-gap: 23px;
            list-style: none;
            text-align: center;
            width: 70vw;
            justify-content: end;
            margin-right: 0rem;
          }
          
          .nav_item {
            display: flex;
            align-items: center;
            height: 80px;
          }
          
          .nav_links {
            color: white;
            text-decoration: none;
            padding: 10px 0;
          }

          .active{
            color:#ffcb08;
            text-decoration: none;
            padding: 10px 0;
          }

          .linkColor:hover{
            color:#ffcb08;
          }
          
          .nav_links:hover {
            // background-color: #1888ff;
            // border-radius: 4px;
            // transition: all 0.2s ease-out;
          }

          
          .nav_links_mobile {
            display: none;
          }
          
          .menu_icon {
            display: none;
          }
          
          @media screen and (max-width: 960px) {
            .topTel{
              justify-content: center;
            }
            
            .NavbarItems {
              position: relative;
            }
          
            .nav_menu {
              display: flex;
              flex-direction: column;
              width: 85%;
              height: 62vh;
              position: absolute;
              top: 0px;
              left: -100%;
              opacity: 1;
              transition: all 0.5s ease;
              align-items: center;
            }
          
            .nav_menu.active {
              background: #7b7b7b;
              left: 0;
              opacity: 1;
              transition: all 0.5s ease;
              z-index: 2;
            }
          
            .nav_links {
              text-align: center;
              padding: 2rem;
              width: 100%;
              display: table;
            }

            .active{
              text-align: flex-end;
              padding: 2rem;
              width: 80%;
              display: inline-table;
            }
          
            .nav_links:hover {
              border-radius: 0;
            }
          
            .navbar_logo {
              position: absolute;
              top: 0;
              left: 0;
              transform: translate(25%, 50%);
            }
          
            .menu_icon {
              display: block;
              position: absolute;
              top: 0;
              right: 0;
              transform: translate(-58%, 78%);
              cursor: pointer;
            }

       
            .nav_links_mobile {
              display: block;
              text-align: center;
              padding: 1.5rem;
              margin: 2rem auto;
              border-radius: 4px;
              width: 80%;
              background: #1888ff;
              text-decoration: none;
              color: #fff;
              font-size: 1.5rem;
            }
          
            .nav_links_mobile:hover {
              background: #fff;
              color: #1888ff;
              transition: 250ms;
            }
          
          }
        `}
        </style>
      </>
    );
  }
  
  export default Navbar;