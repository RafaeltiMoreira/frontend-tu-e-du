import { useEffect } from 'react';
import './HeaderShop.css';

const HeaderShop = () => {
  useEffect(() => {
    const handleScrollToHeader = (e) => {
      const targetId = e.target.getAttribute('href');
      if (targetId === '#header-shop') {
        e.preventDefault();
        const headerElement = document.querySelector(targetId);
        const offset = 60; // Ajuste este valor conforme necessário
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = headerElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    const menuLinks = document.querySelectorAll('a[href="#header-shop"]');
    menuLinks.forEach(link => {
      link.addEventListener('click', handleScrollToHeader);
    });

    return () => {
      menuLinks.forEach(link => {
        link.removeEventListener('click', handleScrollToHeader);
      });
    };
  }, []);

  return (
    <div id='header-shop'>
      <div className='header-menu'></div>
      <div className='header'>
        <div className='header-contents'>
          <h2 className='header-h2'>Lista de nossas sugestões de presentes</h2>
          <a href='#menu' >Lista de presentes</a>
        </div>
      </div>
    </div>
  )
}

export default HeaderShop
