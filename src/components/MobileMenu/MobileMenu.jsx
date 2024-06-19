import { useState } from 'react';
import ListItem from "@mui/material/ListItem";
import './MobileMenu.css';
import { Link, useNavigate } from 'react-router-dom';

const menus = [
  {
    id: 1,
    title: 'Início',
    link: '#home',
  },
  {
    id: 2,
    title: 'Os Noivos',
    link: '#couple',
  },
  {
    id: 3,
    title: 'Nossa história',
    link: '#story',
  },
  {
    id: 4,
    title: 'Nossas fotos',
    link: '#book',
  },
  {
    id: 5,
    title: 'Lista de presentes',
    link: '/ecommerce',
  },
  {
    id: 6,
    title: 'Portfolio',
    link: '/portfolio-grid',
  },
  {
    id: 7,
    title: 'Shop',
    link: '/shop',
  },
  {
    id: 8,
    title: 'Blog',
    link: '/blog',
  },
  {
    id: 9,
    title: 'Contato',
    link: '#contact',
  }
];

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0);
  const [menuActive, setMenuState] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (link, id) => {
    if (link.startsWith('#')) {
      
      const sectionId = link.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (link.startsWith('/')) {
      
      setOpenId(id);
      setMenuState(false); 
      navigate(link);
    }
  };

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
        <div className="menu-close">
          <div className="clox" onClick={() => setMenuState(!menuActive)}>
            <i className="ti-close"></i>
          </div>
        </div>
        <ul className="responsivemenu">
          {menus.map((item, mn) => (
            <ListItem 
              className={item.id === openId ? 'active' : null} 
              key={mn} 
              onClick={() => handleLinkClick(item.link, item.id)}
            >
              {item.link.startsWith('#') ? (
                <a href={item.link}>{item.title}</a>
              ) : (
                <Link to={item.link}>{item.title}</Link>
              )}
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