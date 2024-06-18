import { useContext } from 'react';
import './ListDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';

const ListDisplay = ({ category }) => {
    const { gift_list } = useContext(StoreContext)
  return (
    <div className='list-display' id='menu'>
      <h2>Sua presença é o maior presente que poderíamos receber. Se desejar nos presentear, fique à vontade para explorar as sugestões abaixo.</h2>
      <p className='text-p'>Lista de presentes</p>
      <div className="list-display-list">
        {gift_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return <ListItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }
        })}
      </div>
    </div>
  )
}

ListDisplay.propTypes = {
    category: PropTypes.any.isRequired,
};

export default ListDisplay
