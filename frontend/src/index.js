import React from 'react';
import ReactDOM from 'react-dom';
import {Provider}  from 'react-redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
// import 'bootstrap/dist/js/bootstrap.bundle.js'
// import 'font-awesome/css/font-awesome.css'
import { BrowserRouter } from 'react-router-dom';
// import 'json5'
// import './crash.css'
// import 'jquery';
// import 'popper.js/dist/umd/popper';
// import 'mysql'
// import Myindex from './components/E-commerce/myindi';

import Navbar from './components/Navbar/navbar';
import store from './components/E-commerce/Products/store/store'

import Footer from './components/Layout/footer';




ReactDOM.render(

  <Provider store= {store}>
  <React.StrictMode>
    
    <BrowserRouter>
    <Navbar/>
   <App/>
        <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

