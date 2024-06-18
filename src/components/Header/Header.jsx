import PropTypes from 'prop-types';
/*import { useState } from 'react'*/
import { Link, useNavigate } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'


const Header = ({ hclass = '', topbarNone = false }) => {
  /*const [menuActive, setMenuState] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault()
  }*/

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  const navigate = useNavigate();
    const handleClickShop = () => navigate('https://tuaneeduan.com.br/ecommerce');

  return (

    <header id="header" className={topbarNone ? 'topbar-none' : ''}>
      <div className={`wpo-site-header ${hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <Link onClick={ClickHandler} className="navbar-brand" to="/home">Tuane e Duan</Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">
                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close"><i className="ti-close"></i></button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <a href='#home'>Início</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a onClick={ClickHandler} href="#couple">Os Noivos</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a onClick={ClickHandler} href='#story'>Nossa história</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a onClick={ClickHandler} href="#book">Nossas fotos</a>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={handleClickShop} to="https://tuaneeduan.com.br/ecommerce">Lista de presentes</Link>
                    </li>
                    <li><a onClick={ClickHandler} href='#contact'>Contato</a></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

// Definindo os tipos das propriedades esperadas
Header.propTypes = {
  hclass: PropTypes.string,
  topbarNone: PropTypes.bool,
};

export default Header;