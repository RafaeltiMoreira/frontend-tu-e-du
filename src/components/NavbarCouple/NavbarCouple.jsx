import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';

export default function NavbarCouple({ hclass = '', topbarNone = false }) {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const className = scroll > 80 ? 'fixed-navbar active' : 'fixed-navbar';

  return (
    <div className={className}>
      <Header hclass={hclass} topbarNone={topbarNone} />
    </div>
  );
}

// Definindo os tipos das propriedades esperadas
NavbarCouple.propTypes = {
  hclass: PropTypes.string,
  topbarNone: PropTypes.bool,
};