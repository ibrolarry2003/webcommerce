import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ORDER_CREATE_RESET } from '../../Products/constant/orderConstant'
import CheckoutSteps from '../cartCheckout';
import LoadingMess from '../../Products/loadingMess';
import ErrMess from '../../Products/errMess';
import { createOrder } from '../../Products/productActions/orderActions';

export default function PlaceOrderScreen() {

  const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);



    if (!cart.paymentMethod) {
      navigate('/payment');
    }

  
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
    const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
    cart.itemsPrice = toPrice(
      cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    );
    cart.shippingPrice = cart.itemsPrice > 20000 ? toPrice(1000) : toPrice(1000);
    cart.taxPrice = toPrice(0.005 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

    const dispatch = useDispatch();
    const placeOrderHandler = () => {
      // TODO: dispatch place order action
      dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
    };

    useEffect(() => {
      if (success) {
        navigate(`/order/${order._id}`);
        dispatch({ type: ORDER_CREATE_RESET });
      }
    }, [dispatch, order, navigate, success]);
    return (
      <div>
        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Delivery Information</h2>
                <p>
                  <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                  <strong>Address: </strong> {cart.shippingAddress.address}<br />
                  <strong>City:</strong>{cart.shippingAddress.city} <br />
                  <strong>State:</strong> {cart.shippingAddress.state} {  '   '}
                  <strong>Phone:</strong>{cart.shippingAddress.phone}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {cart.paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>
                  {cart.cartItems.map((item) => (
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
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.qty} x N{item.price} = N{item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>N{cart.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>N{cart.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>N{cart.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>N{cart.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primary block"
                  disabled={cart.cartItems.length === 0}
                >
                  Place Order
                </button>
              </li>
              {loading && <LoadingMess/>}
              {error && <ErrMess variant="danger">{error}</ErrMess>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}