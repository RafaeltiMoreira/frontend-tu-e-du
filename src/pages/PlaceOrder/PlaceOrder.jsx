import { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import { formatNumber } from '../../lib/utils';
import { assets } from '../../assets/assets';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
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

  return (
    <div className='place-order qr-code'>
      <div className="place-order-left">
        <p className='title'>Pagamento</p>
        <div>
          <p className='title-text-1'>Para facilitar sua transferência e se caso preferir, disponibilizamos três opções para melhor forma de pagamento: QRCode, chave PIX e Mercado Pago.</p>
        </div>
        <div className='align-details'>
          
            <p className='title-text-2'>QRCode ou chave PIX</p>
            
              <p><b>Nome:</b> <span>Duan Carvalho Soares</span></p>
              <p><b>CPF:</b> <span>•••.232.521-••</span></p>
              <p><b>Banco:</b> <span>077 - Banco Inter S.A.</span></p>
            
          
        </div>
        <div className="img-code">
          <img className='img-qrcode' src={assets.qrcode} alt="QRcode" />
          <input type="text" id="text" value={textoCopiado} readOnly />
          <button className='btnCopiar' id="btnCopiar" onClick={copiarTexto}>
            {copied ? 'Copiado' : 'PIX (Copia e Cola).'}
            <ion-icon name="copy-outline"></ion-icon>
          </button>
        </div>

      </div>
      <div className="place-order-right">
        <div className="cart-total">
        <p className='title-text-2'>Mercado Pago</p>
          <h2>Total do carrinho</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{formatNumber(getTotalCartAmount())}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Frete grátis</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p><b>Total</b></p>
              <b>{formatNumber(getTotalCartAmount())}</b>
            </div>
          </div>
          <button >Pagar pelo Mercado Pago</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
