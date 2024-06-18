import { Fragment, useState } from 'react';
/*import List from "@mui/material/List";*/
import ListItem from "@mui/material/ListItem";
/*import Collapse from "@mui/material/Collapse";*/
/*import { Link } from "react-router-dom";*/
import './MobileMenu.css';

const menus = [
  {
    id: 1,
    title: 'Home',
    link: '#home',
    /*submenu: [
      {
        id: 11,
        title: 'Wedding Home 1',
        link: '/home'
      },
      {
        id: 12,
        title: 'Wedding Home 2',
        link: '/home-2'
      },
      {
        id: 13,
        title: 'Announcement Home 1',
        link: '/home-3'
      },
      {
        id: 14,
        title: 'Announcement Home 2',
        link: '/home-4'
      },
      {
        id: 15,
        title: 'Muslim Wedding Home',
        link: '/home-5'
      },
      {
        id: 16,
        title: 'Asian Wedding Home',
        link: '/home-6'
      },
      {
        id: 17,
        title: 'Muslim Wedding Home(RTL)',
        link: '/home-rtl'
      },
      {
        id: 18,
        title: 'Wedding Invitation 1',
        link: '/invitation-1'
      },
      {
        id: 19,
        title: 'Wedding Invitation 2',
        link: '/invitation-2'
      },
    ]*/
  },
  {
    id: 11,
    title: 'Event Planner Homes',
    link: '/home',
    submenu: [
      {
        id: 111,
        title: 'Wedding Planner 1',
        link: '/home-7'
      },
      {
        id: 112,
        title: 'Wedding Planner 2',
        link: '/home-8'
      },
      {
        id: 113,
        title: 'Wedding Planner 3',
        link: '/home-9'
      }
    ]
  },
  {
    id: 21,
    title: 'Wedding Shop Homes',
    link: '/shop-home',
    submenu: [
      {
        id: 211,
        title: 'Bridal Shop',
        link: '/shop-home'
      },
      {
        id: 212,
        title: 'Wedding Bouquet Shop',
        link: '/shop-home-2'
      },
      {
        id: 212,
        title: 'Bouquet Shop Video Bg',
        link: '/shop-home-video-bg'
      },
      {
        id: 214,
        title: 'Wedding Cake Shop',
        link: '/shop-home-3'
      }
    ]
  },

  {
    id: 2,
    title: 'Pages',
    link: '/',
    submenu: [
      {
        id: 21,
        title: 'About',
        link: '/about'
      },
      {
        id: 22,
        title: 'Our story',
        link: '/story'
      },
      {
        id: 23,
        title: 'Accomodation',
        link: '/accomodation'
      },
      {
        id: 24,
        title: 'RSVP',
        link: '/rsvp'
      },
      {
        id: 255,
        title: 'Gallery',
        link: '/gallery'
      },
      {
        id: 266,
        title: 'Planners',
        link: '/planner'
      },
      {
        id: 258,
        title: 'Planner Single',
        link: '/team-single/Jenny-Wilson'
      },
      {
        id: 267,
        title: 'Bridesmaid & Groomsman',
        link: '/groom-bride'
      },
      {
        id: 253,
        title: 'Serevice',
        link: '/service'
      },
      {
        id: 26,
        title: 'Serevice S2',
        link: '/service-s2'
      },
      {
        id: 262,
        title: 'Serevice S3',
        link: '/service-s3'
      },
      {
        id: 27,
        title: 'Serevice Single',
        link: '/service-single/Wedding-Dress'
      },
      {
        id: 28,
        title: 'Pricing',
        link: '/pricing'
      },
      {
        id: 29,
        title: 'coming',
        link: '/coming'
      },
      {
        id: 221,
        title: '404 Error',
        link: '/404'
      },
      {
        id: 251,
        title: 'Login',
        link: '/login'
      },
      {
        id: 262,
        title: 'Register',
        link: '/register'
      },
    ]
  },
  {
    id: 4,
    title: 'Portfolio',
    link: '/portfolio-grid',
    submenu: [
      {
        id: 41,
        title: 'Portfolio Grid',
        link: '/portfolio-grid'
      },
      {
        id: 42,
        title: 'Portfolio Masonary',
        link: '/portfolio-masonary'
      },
      {
        id: 43,
        title: 'Portfolio Masonary S2',
        link: '/portfolio-masonary-s2'
      },
      {
        id: 45,
        title: 'Portfolio Masonary S3',
        link: '/portfolio-masonary-s3'
      },
      {
        id: 44,
        title: 'Portfolio Single',
        link: '/project-single/James-Amelia'
      }
    ]
  },

  {
    id: 7,
    title: 'Shop',
    link: '/shop',
    submenu: [
      {
        id: 71,
        title: 'Shop',
        link: '/shop',
      },
      {
        id: 75,
        title: 'Shop Single',
        link: '/product-single/Earrings'
      },
      {
        id: 76,
        title: 'Cart',
        link: '/cart'
      },
      {
        id: 77,
        title: 'Wishlist',
        link: '/wishlist'
      },
      {
        id: 78,
        title: 'Checkout',
        link: '/checkout'
      }

    ]
  },

  {
    id: 5,
    title: 'Blog',
    link: '/blog',
    submenu: [
      {
        id: 51,
        title: 'Blog',
        link: '/blog'
      },
      {
        id: 52,
        title: 'Blog Left sidebar',
        link: '/blog-left'
      },
      {
        id: 53,
        title: 'Blog full width',
        link: '/blog-fullwidth'
      },
      {
        id: 54,
        title: 'Blog single',
        link: '/blog-single/Top-10-wedding'
      },
      {
        id: 55,
        title: 'Blog single Left sidebar',
        link: '/blog-single-left-sidebar/Top-10-wedding'
      },
      {
        id: 56,
        title: 'Blog single Left sidebar',
        link: '/blog-single-fullwidth/Top-10-wedding'
      },
    ]
  },
  {
    id: 88,
    title: 'Contact',
    link: '#contact',
  }


]


const MobileMenu = () => {

  const [openId, setOpenId] = useState(0);
  const [menuActive, setMenuState] = useState(false);

  /*const ClickHandler = () => {
    window.scrollTo(10, 0);
  }*/

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
        <div className="menu-close">
          <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
        </div>

        <ul className="responsivemenu">
          {menus.map((item, mn) => {
            return (
              <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                {item.submenu ?
                  <Fragment>
                    <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                      <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                    </p>
                    {/*<Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                      <List className="subMenu">
                        <Fragment>
                          {item.submenu.map((submenu, i) => {
                            return (
                              <ListItem key={i}>
                                <Link onClick={ClickHandler}
                                  to={submenu.link}>{submenu.title}</Link>
                              </ListItem>
                            )
                          })}
                        </Fragment>
                      </List>
                    </Collapse>*/}
                  </Fragment>
                  : <a
                    href={item.link}>{item.title}</a>
                }
              </ListItem>
            )
          })}
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
  )
}

export default MobileMenu;