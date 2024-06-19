import { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { assets } from '../../assets/assets';
import './Navbar.css';
import { StoreContext } from '../../context/StoreContext';

const Navbar = () => {
    const [menu, setMenu] = useState('/ecommerce');
    const menuRef = useRef();
    const openMenu = () => {
        menuRef.current.style.right='0';
    }
    const closeMenu = () => {
        menuRef.current.style.right='-320px';
    }
    const { getTotalCartAmount, getTotalCartQuantity } = useContext(StoreContext);

    const navigate = useNavigate();
    const handleClickHome = () => navigate('/home');

    // Obtendo a quantidade total de itens no carrinho
    const cartItemCount = getTotalCartQuantity();

    return (
        <div className='navbar-shop'>
            <Link to="/ecommerce"><img src={assets.logoTd} alt="Logo" className='logo' /></Link>
            <img src={assets.menu_open} onClick={openMenu} alt="Ícone menu open" className="nav-mob-open" />
            <ul ref={menuRef} className="navbar-menu">
                <img src={assets.menu_close} onClick={closeMenu} alt="Ícone menu close" className="nav-mob-close" />
                <Link to="/ecommerce" onClick={() => setMenu('/ecommerce')} className={menu === '/ecommerce' ? 'active' : ''}>Início</Link>
                <a href='#menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Lista de presentes</a>
                <a href='#contato' onClick={() => setMenu('contato')} className={menu === 'contato' ? 'active' : ''}>Contato</a>
                <button className='btn-link' onClick={handleClickHome}>Site dos Noivos</button>
            </ul>
            <div className="navbar-right">
                <div className="navbar-search-icon">
                    <Link to="/order-cart"><img src={assets.cart_icon} alt="Ícone da sacola de compras." /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}>
                        {cartItemCount > 0 && (
                            <Link to="/order-cart">
                                <span>{cartItemCount}</span>
                            </Link>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar