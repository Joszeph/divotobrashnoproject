import Link from 'next/link'
import {MenuItems} from './MenuItems'

import {useState} from 'react'



function Dropdown() {
    const [click, setClick] = useState(false)
  
    const handleClick = () => setClick(!click)
  
    return (
      <>
        <ul
          onClick={handleClick}
          className={click ? 'dropdown_menu clicked' : 'dropdown_menu'}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  href={item.path}
                  
                >
                  <a onClick={() => setClick(false)}>{item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <style>{`
            .dropdown_menu {
                background-color:none;
                position: absolute;
                top: 106px;
                list-style: none;
                text-align: start;
                padding-left:0;
                z-index: 1;
              }
              
              .dropdown_menu li {
                background:#7b7b7b;
                cursor: pointer;
                list-style-type:none;
                margin:10px;
                border: 1px solid white;
                border-radius: 15px;
                padding: 8px;
                margin: 5px 0;
              }
              
              .dropdown_menu li:hover {
                background: #ffcb08;
              }
              
              .dropdown_menu.clicked {
                display: none;
              }
              
              .dropdown_link {
                display: block;
                height: 100%;
                width: 100%;
                text-decoration: none;
                color: #fff;
                padding: 16px;
              }
              
              @media screen and (max-width: 960px) {
                .fa-caret-down {
                  display: none;
                }
              }
              
        `}</style>
      </>
    );
  }
  
  export default Dropdown

  