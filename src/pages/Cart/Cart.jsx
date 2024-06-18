import { useContext } from 'react';
import { formatNumber } from '../../lib/utils';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, gift_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)
  const navigate = useNavigate();
  const handleClickOrder = () => navigate('/order');

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p className='display-text'>Itens</p>
          <p>Info.</p>
          <p>Valor</p>
          <p>Quant.</p>
          <p>Total</p>
          <p>Excluir</p>
        </div>
        <br />
        <hr />
        {gift_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className='cart-items-title cart-items-item'>
                  <img className='display-img' src={item.image} alt="Imagem do produto escolhido" />
                  <p className='ellipsis-text'>{item.name}</p>
                  <p>{formatNumber(item.price)}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{formatNumber(item.price * cartItems[item._id])}</p>
                  <p className='img-svg' onClick={() => removeFromCart(item._id)}>
                    <ion-icon name="close-circle-outline"></ion-icon>
                  </p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
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
              <b>Total</b>
              <b>{formatNumber(getTotalCartAmount())}</b>
            </div>
          </div>
          <button onClick={handleClickOrder}>Prosseguir para o pagamento</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
