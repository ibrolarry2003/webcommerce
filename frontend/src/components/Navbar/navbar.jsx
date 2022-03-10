import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { signout } from '../E-commerce/Products/productActions/userActions';

export default function Navbar(){


      const cart = useSelector((state) => state.cart);
  
        const { cartItems } = cart;
      

        const userSignin = useSelector((state) => state.userSignin);
          const { userInfo } = userSignin;
         
          const dispatch = useDispatch();
          const signoutHandler = () => {
            dispatch(signout());
          }
        return(
            <div className="App">
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Palasa</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
       aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/product">Products</Link>
          </li>
          <li className="nav-item">
              <Link className= "nav-link" aria-current="page" to="/about">About Us</Link>
              </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/contact">Contact us
             
              </Link>
          </li>
         
        </ul>
        <span className="navbar-text m-2">
        <Link to="/cart/:id">Cart
        {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>)} 
         </Link> { '                                      '}
        {
          userInfo ? (
            <div className='dropdown'>
            <Link to="#">{userInfo.name}
            </Link>
            <ul className='dropdown-menu-item'>
            <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
              <li>
              <Link to='#signout' onClick={signoutHandler}>Sign Out</Link>
              </li>
            </ul>
            </div>
          ) :
          ( <div>
            <Link to="/signin">Sign In</Link> { ' or   '}
          <Link to="/register">Register</Link>
          </div>
          )
        }
     
      </span>
      </div>
    </div>
  </nav>
        
        
      </div>
      

        )
    }
  
