import './ExploreMenu.css';
import PropTypes from 'prop-types';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h2>Agradecemos por estar aqui conosco neste momento tão especial!</h2>
      <p className='explore-menu-text'>Escolha por categoria</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
            return (
                <div onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt="Imagens da lista de presentes" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

ExploreMenu.propTypes = {
  category: PropTypes.any.isRequired,
  setCategory: PropTypes.func.isRequired
};

export default ExploreMenu
