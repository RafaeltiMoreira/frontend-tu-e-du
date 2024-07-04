import PropTypes from 'prop-types';
import { formatNumber } from '../../lib/utils';
import './ListItem.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';


const ListItem = ({ id, name, price, description, image }) => {
  const { productLinks } = useContext(StoreContext);  

  const productLink = productLinks[id];
  const isOutOfStock = !productLink.url || !productLink.script;
  const hasOnlyUrl = productLink.url && !productLink.script;

  return (
    <div className='list-item'>
      <div>
        <img className='list-item-image' src={image} alt="Imagens dos produtos" />
      </div>
      <div className="list-item-info list-item-img-container">
        <div className="list-item-name-rating">
          <p>{name}</p>
        </div>
        <p className="list-item-desc">{description}</p>
        {price !== undefined ? (
          isOutOfStock ? (
            <p className="list-item-price"><s>{formatNumber(price)}</s></p>
          ) : (
            <p className="list-item-price">{formatNumber(price)}</p>
          )
        ) : (
          <p className="list-item-price">R$ Livre</p>
        )}
        {hasOnlyUrl ? (
          <div>
            <button className='add list-item-counter'>
              <i className="fa fa-shopping-bag"></i>{" "}
              <a href={productLink.url} target="_blank" rel="noopener noreferrer">Presentear</a>
            </button>
          </div>
        ) : isOutOfStock ? (
          <button className='out-of-stock'>Presenteados</button>
        ) : (
          <div>
            <button className='add list-item-counter'>
              <i className="fa fa-shopping-bag"></i>{" "}
              <a href={productLink.url} target="_blank" rel="noopener noreferrer">Presentear</a>
            </button>
            {productLink.script && (
              <script
                src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
                data-preference-id={productLink.script}
                data-source="button">
              </script>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

ListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ListItem
