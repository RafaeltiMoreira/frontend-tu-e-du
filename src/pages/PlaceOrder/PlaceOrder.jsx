import { useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { v4 as uuidv4 } from 'uuid';
import { StoreContext } from '../../context/StoreContext';
import { formatNumber } from '../../lib/utils';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { getTotalCartAmount, cartItems, gift_list } = useContext(StoreContext);
  const [preferenceId, setPreferenceId] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sendAndPayClicked, setSendAndPayClicked] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const [copied, setCopied] = useState(false);
  const textoCopiado = "00020126330014BR.GOV.BCB.PIX0111026232521735204000053039865802BR5920Duan Carvalho Soares6008Brasilia62070503***6304855B"

  const publicKey = import.meta.env.VITE_REACT_PUBLIC_KEY
  const url = import.meta.env.VITE_REACT_URL
  //console.log("API URL:", url);
  //console.log('Public Key:', publicKey);

  initMercadoPago(publicKey, {
    locale: "pt-BR",
    advancedFraudPrevention: true,
  });

  const generateExternalReference = () => {
    const reference = String(Math.floor(Math.random() * 10000000000));
    return reference;
  };

  const createPreference = useCallback(async () => {
    try {
      const idempotencyKey = uuidv4();
      const orderItems = gift_list.map((item) => ({
        id: item._id,
        title: item.name,
        description: item.description,
        picture_url: item.image,
        category_id: item.category,
        quantity: cartItems[item._id],
        unit_price: parseFloat(item.price),
      })).filter(item => item.quantity > 0);

      //console.log('Items:', orderItems);

      if (orderItems.length === 0) {
        throw new Error("No items in the cart");
      }

      const preferenceData = {
        external_reference: generateExternalReference(),
        items: orderItems,
        payer: {
          first_name: firstName,
          last_name: lastName,
        },
      };

      const response = await axios.post(`${url}`, preferenceData, {
        headers: {
          "Content-Type": "application/json",
          "X-Idempotency-Key": idempotencyKey,
        }
      });

      if (!response.data) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log(response)

      const { id } = response.data;
      setPreferenceId(id);
      return id;

    } catch (error) {
      console.error("Erro ao criar preferência de pagamento: ", error);
      throw error;
    }
  }, [cartItems, gift_list, firstName, lastName, url]);

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

  const handleSendAndPay = async () => {
    let hasError = false;

    if (!firstName) {
      setFirstNameError(true);
      hasError = true;
    } else {
      setFirstNameError(false);
    }

    if (!lastName) {
      setLastNameError(true);
      hasError = true;
    } else {
      setLastNameError(false);
    }

    if (hasError) {
      toast.error("Por favor, preencha seu nome e sobrenome antes de prosseguir.");
      return;
    }

    setSendAndPayClicked(true);
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  useEffect(() => {
    if (firstName && lastName) {
      setFormFilled(true);
      setFirstNameError(false);
      setLastNameError(false);
    } else {
      setFormFilled(false);
    }
  }, [firstName, lastName]);

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
          <div className="form-group">
            <label htmlFor="firstName">Nome:</label>
            <input
              type="text"
              id="firstName"
              placeholder="Digite seu nome"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                if (e.target.value) setFirstNameError(false);
              }}
              required
            />
            {firstNameError && <p className="error">Dado obrigatório!</p>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Sobrenome:</label>
            <input
              type="text"
              id="lastName"
              placeholder="Digite seu sobrenome"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                if (e.target.value) setLastNameError(false);
              }}
              required
            />
            {lastNameError && <p className="error">Dado obrigatório!</p>}
          </div>
          <button onClick={handleSendAndPay} disabled={formFilled && sendAndPayClicked}>
          {sendAndPayClicked ? 'Abrindo o botão Mercado Pago...' : 'Enviar e pagar pelo Mercado Pago'}
          </button>
          {sendAndPayClicked && preferenceId && (
            <div id="walletBrick_container">
              <Wallet
                initialization={{ preferenceId: preferenceId, redirectMode: 'self' }}
                customization={{ texts: { valueProp: 'smart_option' } }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder