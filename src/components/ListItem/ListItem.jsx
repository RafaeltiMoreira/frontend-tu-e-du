import PropTypes from 'prop-types';
import { assets } from '../../assets/assets';
import { formatNumber } from '../../lib/utils';
import './ListItem.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const navigate = useNavigate();
  const handleClickCart = () => navigate('/order-cart');

  return (
    <div className='list-item'>
      <div>
        <img className='list-item-image' src={image} alt="Imagens dos produtos" />
      </div>
      <div className="list-item-info list-item-img-container">
        <div className="list-item-name-rating">
          <p>{name}</p>
          {/*<img src={assets.rating_starts} alt="" />*/}
        </div>
        <p className="list-item-desc">{description}</p>
        <p className="list-item-price">{formatNumber(price)}</p>
        {
          !cartItems[id] ? <button className='add' onClick={() => addToCart(id)}><i className="fa fa-shopping-bag"></i>{" "}Presentear</button>
            : <div className='list-item-counter'>
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Ícone de remover quantidades dos produtos." />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Ícone de adicionar quantidades dos produtos." />
              <button className='btn-cart' onClick={handleClickCart}>Concluir</button>
            </div>
        }
      </div>
    </div>
  )
}

ListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ListItem
