import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ShoppingCart from './components/E-commerce/Cart/cartscreen';
import OrderScreen from './components/E-commerce/Cart/Orders/createOrder';
import OrderHistoryScreen from './components/E-commerce/Cart/Orders/orderHistory';
import PaymentMethodScreen from './components/E-commerce/Cart/Payment/Payment';
import PlaceOrderScreen from './components/E-commerce/Cart/Payment/Placeorder';
import ShippingAddressScreen from './components/E-commerce/Cart/Shipping/ShippingAddress.jsx';
import About from './components/E-commerce/Contact/about';
import Contact from './components/E-commerce/Contact/contact';
import SigninScreen from './components/E-commerce/Form/loginform';

// import Homepage from './components/homepage';


// import { Customerlogin } from './components/logininfo/customerlogin';
import Myindex from './components/E-commerce/myindi';
import ProductHomepage from './components/E-commerce/Products/ProductHomepage';
import Productpage from './components/E-commerce/Products/productpage';
import RegisterScreen from './components/E-commerce/Register/register';




export default function App() {


    return (
      
      <React.Fragment>
        
        <Routes>
       <Route path="/" element={<Myindex/>} />
      <Route path="product" element={<ProductHomepage />} />
      <Route path="product/:id" element={<Productpage />} />
      <Route path="cart/:id" element={<ShoppingCart/>} />
      <Route path = "signin" element = {<SigninScreen/>} />
      <Route path = "register" element = {<RegisterScreen/>}/>
      <Route path="/shipping" element = {<ShippingAddressScreen/>}/>
      <Route path= "/payment" element = {<PaymentMethodScreen/>}/>
      <Route path= "/placeorder" element = {<PlaceOrderScreen/>}/>
      <Route path = "/order/:id" element = {<OrderScreen/>}/>
      <Route path="/orderhistory" element = {<OrderHistoryScreen/>}/>
      <Route path = "about" element = {<About/>} />
      <Route path = "contact" element = {<Contact/>} />
        </Routes>
    
      {/* <Customerlogin/> */}
      {/* <ShoppingCart/> */}
      {/* <Homepage/> */}
      </React.Fragment>
          );
  
  
}


