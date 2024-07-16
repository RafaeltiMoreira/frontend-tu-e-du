import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { formatNumber } from '../../lib/utils';
import './ListItem.css';
import { StoreContext } from '../../context/StoreContext';
import Modal from '../Modal/Modal';


const ListItem = ({ id, name, price, description, image }) => {
  const { productLinks } = useContext(StoreContext);  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState('');
  const [currentPlatform, setCurrentPlatform] = useState('');
  // console.log({ id, name, price, image });
  const productLink = productLinks[id];
  const isOutOfStock = !productLink.url || !productLink.script;
  const hasOnlyUrl = productLink.url && !productLink.script;

  const openModal = (url, platform) => {
    setCurrentLink(url);
    setCurrentPlatform(platform);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentLink('');
    setCurrentPlatform('');
  };

  const proceedToPayment = () => {
    window.location.href = currentLink;
  };

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
            <button target="_blank" rel="noopener noreferrer" className='add list-item-counter' onClick={() => openModal(productLink.url, 'Mercado Pago')}>
              <i className="fa fa-shopping-bag"></i>{" "}
              Presentear
            </button>
          </div>
        ) : isOutOfStock ? (
          <button className='out-of-stock'>Presenteados</button>
        ) : (
          <div>
            <button target="_blank" rel="noopener noreferrer" className='add list-item-counter' onClick={() => openModal(productLink.url, 'Mercado Pago')}>
              <i className="fa fa-shopping-bag"></i>{" "}
              Presentear
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
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onProceed={proceedToPayment}
        platform={currentPlatform}
        id={id}
        name={name}
        price={price}
        image={image}
      />
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
