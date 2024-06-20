import PropTypes from 'prop-types';
import { Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom'
import shape1 from '../../images/footer-shape-1.svg'
import shape2 from '../../images/footer-shape-2.svg'

const ClickHandler = () => {
  window.scrollTo(10, 0);
}

const FooterCouple = ({ footerClass = '' }) => {
  return (
    <footer className={`wpo-site-footer ${footerClass}`} id='contact'>
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row align-items-center">
            {/*<div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Links</h3>
                </div>
                <div className="link-wrap">
                  <ul>
                    <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                    <li><Link onClick={ClickHandler} to="/service">Services</Link></li>
                    <li><Link onClick={ClickHandler} to="/rsvp">RSVP</Link></li>
                  </ul>
                  <ul>
                    <li><Link onClick={ClickHandler} to="/gallery">Gallery</Link></li>
                    <li><Link onClick={ClickHandler} to="/">Get Quote</Link></li>
                    <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>*/}
            <div className="col col-xl-6 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <Link className='logo' onClick={ClickHandler} to="/">Tuane e Duan</Link>
                </div>
                <p>Agradecemos a todos os familiares e amigos por fazerem parte da nossa história.</p>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="https://www.instagram.com/tuane_reis/" target="_blank" rel="noopener noreferrer" title="Tuane Reis">
                    <ion-icon name="logo-instagram"></ion-icon>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="https://www.instagram.com/duaancarvalho/" target="_blank" rel="noopener noreferrer" title="Duan Soares">
                    <ion-icon name="logo-instagram"></ion-icon>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col col-xl-6  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contato</h3>
                </div>
                <div className="contact-ft">
                  <p>tuaneeduan@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright"> &copy; 2024 | <a onClick={ClickHandler} href='#home'>Desenvolvido com carinho por Rafael Moreira</a> | Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ft-shape-1">
        <Slide direction="left" duration="1000" triggerOnce="true">
          <img src={shape1} alt="" />
        </Slide>
      </div>
      <div className="ft-shape-2">
        <Slide direction="right" duration="1200" triggerOnce="true">
          <img src={shape2} alt="" />
        </Slide>
      </div>
    </footer>
  )
}

FooterCouple.propTypes = {
  footerClass: PropTypes.string,
};

export default FooterCouple;