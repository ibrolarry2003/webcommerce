import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './../reducers/CartReducers';
import { 
    orderCreateReducer,
    orderDetailsReducer,
    orderMineListReducer,
    orderPayReducer
 } from '../reducers/orderReducers';
 
import {

    ProductListReducers,
    productDetailsReducer,
    
} from '../reducers/productReducers';

import { 
    userRegisterReducer,
    userSigninReducer
    
} from '../reducers/userReducers';





const initialState = {

userSignin: {
    userInfo: localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo')) 
    : null
},


    cart: {
        cartItems: localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : [],

          shippingAddress: localStorage.getItem('shippingAddress')
          ? JSON.parse(localStorage.getItem('shippingAddress'))
          : {},
          paymentMethod: 'PayPal',
      },
};
const reducer = combineReducers({
    productList: ProductListReducers,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,


});


const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']  || compose;

const store = createStore(
    reducer, 
    initialState, 
    composeEnhancers(applyMiddleware(thunk))
    );
export default store;