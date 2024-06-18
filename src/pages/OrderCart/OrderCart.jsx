import './OrderCart.css';
import { useContext } from 'react';
import { formatNumber } from '../../lib/utils';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const OrderCart = () => {

    const { cartItems, gift_list, addToCart, removeFromCart, getTotalCartAmount } = useContext(StoreContext)
    const navigate = useNavigate();
    const handleClickOrder = () => navigate('/order');

    return (
        <div className='order-cart'>
            <div className="list-display-cart">
                {gift_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={index}>

                                <img className='list-item-image-cart' src={item.image} alt="Imagem do produto escolhido" />
                                <div className="list-item-info-cart list-item-img-container-cart">
                                    <div className="list-item-name">
                                        <p className='ellipsis-text'>{item.name}</p>
                                        <p className='list-desc'>{item.description}</p>
                                    </div>
                                    {/*<p className="list-item-price-cart">{formatNumber(item.price)}{" "}Valor</p>*/}
                                    {/*<p className="text-item">Quantidade: {cartItems[item._id]}</p>*/}
                                    <div className='responsive-price'>
                                    <p className="list-item-price-cart">{formatNumber(item.price * cartItems[item._id])}</p>
                                    {
                                        <div className='list-item-counter-cart'>
                                            <img onClick={() => removeFromCart(item._id)} src={assets.remove_icon_red} alt="Ícone de remover quantidades dos produtos." />
                                            <p>{cartItems[item._id]}</p>
                                            <img onClick={() => addToCart(item._id)} src={assets.add_icon_green} alt="Ícone de adicionar quantidades dos produtos." />
                                        </div>
                                    }
                                    </div>
                                </div>
                                <hr />
                            </div>
                        )
                    }
                })}
            </div>
            <div className="cart-bottom-cart">
                <div className="cart-total-cart">
                    <h2>Total do carrinho</h2>
                    <div>
                        <div className="cart-total-details-cart">
                            <p>Subtotal</p>
                            <p>{formatNumber(getTotalCartAmount())}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details-cart">
                            <p>Frete grátis</p>
                        </div>
                        <hr />
                        <div className="cart-total-details-cart">
                            <p><b>Total</b></p>
                            <b>{formatNumber(getTotalCartAmount())}</b>
                        </div>
                    </div>
                    <button onClick={handleClickOrder}>Prosseguir para o pagamento</button>
                </div>
            </div>
        </div>

    )
}

export default OrderCart