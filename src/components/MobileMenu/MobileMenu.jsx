import { useState } from 'react';
import ListItem from "@mui/material/ListItem";
import './MobileMenu.css';

const menus = [
  {
    id: 1,
    title: 'Início',
    link: '#home',
  },
  {
    id: 11,
    title: 'Nossa história',
    link: '#story',
  },
  {
    id: 21,
    title: 'Nossas fotos',
    link: '#book',
  },
  {
    id: 2,
    title: 'Lista de presentes',
    link: '/ecommerce',
  },
  {
    id: 4,
    title: 'Portfolio',
    link: '/portfolio-grid',
  },
  {
    id: 7,
    title: 'Shop',
    link: '/shop',
  },
  {
    id: 5,
    title: 'Blog',
    link: '/blog',
  },
  {
    id: 88,
    title: 'Contato',
    link: '#contact',
  }
];

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0);
  const [menuActive, setMenuState] = useState(false);

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
        <div className="menu-close">
          <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
        </div>
        <ul className="responsivemenu">
          {menus.map((item, mn) => (
            <ListItem 
              className={item.id === openId ? 'active' : null} 
              key={mn} 
              onClick={() => {
                setOpenId(item.id); 
                setMenuState(false); 
              }}
            >
              <a href={item.link}>{item.title}</a>
            </ListItem>
          ))}
        </ul>
      </div>
      <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
        <button type="button" className="navbar-toggler open-btn">
          <span className="icon-bar first-angle"></span>
          <span className="icon-bar middle-angle"></span>
          <span className="icon-bar last-angle"></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;