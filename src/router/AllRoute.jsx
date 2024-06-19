import { Routes, Route, } from 'react-router-dom';
import Homepage from '../pages/HomePage/HomePage';
import OrderCart from '../pages/OrderCart/OrderCart'
import Home from '../pages/Home/Home';
import PlaceOrder from '../pages/PlaceOrder/PlaceOrder';
import Navbar from '../components/Navbar/Navbar';
import NavbarOrder from '../components/Navbar/NavbarOrder';
import Footer from '../components/Footer/Footer';
import './AllRoute.css'

const AllRoute = () => {

  return (
    <div className='App'>
      
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='home' element={<Homepage />} />

          {/* Rota para ecommerce com redirecionamento */}
        <Route path='/ecommerce' element={<EcommerceRedirect />} />
        
        {/* Rota Cart com Navbar e Footer 
        <Route path="/cart" element={
          <>
            <div className="app">
              <NavbarOrder />
              <Cart />
            </div>
            <Footer />
          </>
        } /> */}

        {/* Rota Cart com Navbar e Footer */}
        <Route path='/order-cart' element={
          <>
            <div className='app'>
              <NavbarOrder />
              <OrderCart />
            </div>
            <Footer />
          </>
        } />
        
        {/* Rota PlaceOrder com Navbar e Footer */}
        <Route path='/order' element={
          <>
            <div className='app'>
              <NavbarOrder />
              <PlaceOrder />
            </div>
            <Footer />
          </>
        } />

        </Routes>
      
    </div>
  );
}

const EcommerceRedirect = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default AllRoute;