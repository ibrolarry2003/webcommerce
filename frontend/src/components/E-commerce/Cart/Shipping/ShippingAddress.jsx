
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../../Products/productActions/CartActions';
import CheckoutSteps from '../cartCheckout';








export default function ShippingAddressScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
 
  const navigate = useNavigate();
  // if (!userInfo) {
  //   navigate('/signin');
  // }
 
  useEffect(() => {
    
    if ( !userInfo ){
     navigate("/signin")   
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
},[])


  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [state, setState] = useState(shippingAddress.state);
  const [phone, setPhone] = useState(shippingAddress.phone);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, state, phone })
    );
    navigate('/payment');
  };

  return (
    <div>
   
  <CheckoutSteps step1 step2></CheckoutSteps>
    <form className="form" onSubmit={submitHandler}>
      <div>
        <h1>Delivery Information</h1>
      </div>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          placeholder="Enter full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        ></input>
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        ></input>
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        ></input>
      </div>
      <div>
        <label htmlFor="state">State of Residence</label>
        <input
          type="text"
          id="state"
          placeholder="Enter state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        ></input>
      </div>
      <div>
        <label htmlFor="Phone Number">Phone Number</label>
        <input
          type="number"
          id="phone"
          placeholder="Enter phone no"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        ></input>
      </div>
      <div>
        <label />
        <button className="primary" type="submit">
          Continue
        </button>
      </div>
    </form>
  </div>
  );
} 