import { Link } from 'react-router-dom'
//import coupleImg1 from '../../images/couple/3.jpg'
//import coupleImg1 from '../../images/couple/tu-e-du-600x600.jpg'
import coupleImg1 from '../../images/couple/tuane-duan.webp'
import coupleImg2 from '../../images/couple/couple-flower.webp'
// import vector1 from '../../images/couple/vector-1.svg'
// import vector2 from '../../images/couple/vector-2.svg'
import './CoupleSection3.scss';


const CoupleSection3 = () => {

  return (
    <section className="wpo-couple-section-s3 section-padding" id="couple">
      <div className="container-fluid">
        <div className="couple-area clearfix">
          <div className="row align-items-center">
            <div className="col col-xl-3 col-lg-4 col-12">
              <div className="text-grid">
                {/* <div className="vector">
                                    <img src={vector1} alt="" />
                                </div> */}
                <h3>Tuane Reis</h3>
                <p>Mãe da Thiandra, é intensa, controladora, determinada e disciplinada, com objetivos claros e práticos. Durante muitos anos, acreditou que caminharia sozinha, mas Deus surpreendeu-a com um encontro de almas com o Duan, e agora não consegue imaginar sua vida sem ele. Ela percebeu que seu maior objetivo é tornar a vida das pessoas que ama mais leve e feliz.</p>
                <div className="social">
                  <ul>
                    <Link to="https://www.instagram.com/tuane_reis/" target="_blank" rel="noopener noreferrer" title="Tuane Reis">
                      <ion-icon name="logo-instagram" className="instagram-icon"></ion-icon>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-xl-6 col-lg-4 col-12">
              <div className="middle-couple-pic">
                <div className="middle-couple-pic-inner">
                  <img src={coupleImg1} alt="" />
                </div>
                <div className="couple-flower">
                  <img src={coupleImg2} alt="" />
                </div>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-4 col-12">
              <div className="text-grid">
                {/* <div className="vector">
                                    <img src={vector2} alt="" />
                                </div> */}
                <h3>Duan Soares</h3>
                <p>Tímido, educado, protetor, disciplinado, soneca, esquecido e brincalhão. Busca sempre superar seus objetivos. Adora fazer as pessoas sorrirem e tornar a vida dos que estão ao seu redor mais leve. Sempre sonhou em constituir uma família e viver um amor leve, hoje é Grato a Deus por esta vivendo esse sonho.</p>
                <div className="social">
                  <ul>
                    <Link to="https://www.instagram.com/duaancarvalho/" target="_blank" rel="noopener noreferrer" title="Duan Soares">
                      <ion-icon name="logo-instagram" className="instagram-icon"></ion-icon>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoupleSection3;