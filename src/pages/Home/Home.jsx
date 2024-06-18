import { useState } from 'react';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import HeaderShop from '../../components/HeaderShop/HeaderShop';
import ListDisplay from '../../components/ListDisplay/ListDisplay';
import './Home.css';

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
      <div>
        <HeaderShop />
        <ExploreMenu category={category} setCategory={setCategory} />
        <ListDisplay category={category} />
      </div>
  )
}

export default Home
