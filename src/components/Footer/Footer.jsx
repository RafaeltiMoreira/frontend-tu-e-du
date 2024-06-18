import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer' id='contato'>
            <img className='logoFooter' src={assets.logoTd} alt="Imagem logo de nome mercadoted" />
            <p className='footer-pay'>Formas de pagamento:</p>
            <div className="footer-content">
                <div className="footer-content-left logoIcons">
                    <img src={assets.visa} alt="Ícone cartão Visa" />
                    <img src={assets.mastercard} alt="Ícone cartão Mastercard" />
                    <img src={assets.mercadopago} alt="Ícone do Mercado Pago" />
                </div>
                <div className="footer-content-center logoIcons">
                    <img src={assets.pix} alt="Ícone do PIX" />
                    <img src={assets.caixa} alt="Ícone do banco Caixa" />
                    <img src={assets.boleto} alt="Ícone do Boleto" />
                </div>
                <div className="footer-content-right logoIcons">
                    <img src={assets.elo} alt="Ícone do cartão Elo" />
                    <img src={assets.amex} alt="Ícone do cartão Amex" />
                    <img src={assets.diners} alt="Ícone do cartão Diners" />
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>&copy; 2024 - Desenvolvido com carinho por Rafael Moreira - Todos os direitos reservados.</p>
        </div>
    )
}

export default Footer
