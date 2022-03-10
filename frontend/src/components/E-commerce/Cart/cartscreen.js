
import React, { useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../Products/productActions/CartActions'
import LoadingMessCart from './../Products/loadingMessCart';


export default function ShoppingCart() {
   
   const params = useParams()
  const productId = params.id;


  const location = useLocation();
  const qty = location.search ? Number(location.search.split('=')[1]): 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  
  

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);



  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate('/signin?redirect=/shipping');
    
  };

  const continueHandler = () => {
    navigate('/product');
  };

  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {!cartItems.length ? (
          <div>
            <LoadingMessCart/>
            
          </div>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>N{item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                    
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : N
                {cartItems.reduce((a, c) => a + parseInt(c.price) * c.qty, 0)}
                
              </h2>
            </li>
          
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
            <li>
              <button
                type="button"
                className="primary block"
                onClick={continueHandler}
              >
                Continue Shopping
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}