import './Modal.css';
import { useState } from 'react';
import { formatNumber } from '../../lib/utils';
import PropTypes from 'prop-types';
import { assets } from '../../assets/assets';

const Modal = ({ isOpen, onClose, onProceed, platform, id, name, price, image }) => {
  const [copied, setCopied] = useState(false);
  const textoCopiado = "00020126330014BR.GOV.BCB.PIX0111026232521735204000053039865802BR5920Duan Carvalho Soares6008Brasilia62070503***6304855B"

  const copiarTexto = () => {
    navigator.clipboard.writeText(textoCopiado)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error('Erro ao copiar texto: ', error);
      });

    console.log("Texto copiado: " + textoCopiado);
  };

  if (!isOpen) return null;
  console.log({ id, name, price, image });
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Informações de Pagamento</h2>
        <p className='modal-title-text'>Se caso preferir, disponibilizamos três opções para melhor forma de pagamento: QRCode, chave PIX e Mercado Pago.</p>
        <div className="img-code">
          <img className='img-qrcode' src={assets.qrcode} alt="QRcode" />
          <input type="text" id="text" value={textoCopiado} readOnly />
          <button className='btnCopiar' id="btnCopiar" onClick={copiarTexto}>
            {copied ? 'Copiado' : 'PIX (Copia e Cola).'}
            <ion-icon name="copy-outline"></ion-icon>
          </button>
        </div>

        <div className='modal-img' key={id}>
          <img className='list-item-image-cart' src={image} alt="Imagem do produto escolhido" />
          <p className='modal-name-text'>{name}</p>
          <p className='modal-name-price'><b>{price !== undefined ? formatNumber(price) : "R$ Livre"}</b></p>
        </div>
        <p className='modal-text-mp'>Ao clicar em prosseguir você será redirecionado (a) para o aplicativo do {platform}</p>
        <div className="modal-buttons">
          <button className='modal-btn-next' onClick={onProceed} target="_blank" rel="noopener noreferrer">Prosseguir</button>
          <button className='modal-btn-close' onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onProceed: PropTypes.func.isRequired,
  platform: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  image: PropTypes.string.isRequired,
};

export default Modal;