import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState('/ecommerce');
    const menuRef = useRef();
    const openMenu = () => {
        menuRef.current.style.right='0';
    }
    const closeMenu = () => {
        menuRef.current.style.right='-320px';
    };

    const navigate = useNavigate();
    const handleClickHome = () => {
        navigate('/home');
    }   

    // Obtendo a quantidade total de itens no carrinho
    // const cartItemCount = getTotalCartQuantity();

    return (
        <div className='navbar-shop'>
            <a href="#header"><img src={assets.logoTd} alt="Logo" className='logo' /></a>
            <img src={assets.menu_open} onClick={openMenu} alt="Ícone menu open" className="nav-mob-open" />
            <ul ref={menuRef} className="navbar-menu">
                <img src={assets.menu_close} onClick={closeMenu} alt="Ícone menu close" className="nav-mob-close" />
                <a href="#header" onClick={() => {setMenu('#header'); closeMenu();}} className={menu === '#header' ? 'active' : ''}>Início</a>
                <a href='#menu' onClick={() => {setMenu('menu'); closeMenu();}} className={menu === 'menu' ? 'active' : ''}>Lista de presentes</a>
                <a href='#contato' onClick={() => {setMenu('contato'); closeMenu();}} className={menu === 'contato' ? 'active' : ''}>Contato</a>
                <button className='btn-link' onClick={handleClickHome}>Site dos Noivos</button>
            </ul>
        </div>
    )
}

export default Navbar