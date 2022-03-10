import React, { useEffect, useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ErrMess from '../../Products/errMess';
import LoadingMess from '../../Products/loadingMess';
import { detailsOrder, payOrder } from '../../Products/productActions/orderActions';
import  Axios  from 'axios';
import { ORDER_PAY_RESET } from '../../Products/constant/orderConstant';



export default function OrderScreen() {



    let params = useParams();
    const orderId = params.id;

    const [sdkReady, setSdkReady] = useState(false);
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;

    const orderPay = useSelector((state) => state.orderPay);
    const {
      loading: loadingPay,
      error: errorPay,
      success: successPay,
    } = orderPay;

    const dispatch = useDispatch();
    useEffect(() => {
      const addPayPalScript = async () => {
        const { data } = await Axios.get('/api/config/paypal');
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
        script.async = true;
        script.onload = () => {
          setSdkReady(true);
      }
      document.body.appendChild(script);
    };
    if (!order || successPay || (order && order._id !== orderId)) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(detailsOrder(orderId));
    } else {
 
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
    }, [dispatch, order, orderId, sdkReady, successPay]);

    const successPaymentHandler = (paymentResult) => {
      dispatch(payOrder(order, paymentResult));
    };

    return loading ? (
      <LoadingMess/>
    ) : error ? (
      <ErrMess variant="danger">{error}</ErrMess>
    ) : (
      <div>
        <h4>This is Your Order ID-<span className="badge rounded-pill bg-success">{order._id}</span></h4>
        <div className="row top">
          <div className="col-2">
            <ul>
              <li>
                <div className="card card-body">
                  <h2>Delivery Information</h2>
                  <p>
                    <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                    <strong>Address: </strong> {order.shippingAddress.address}<br />
                    <strong>City: </strong> {order.shippingAddress.city},<br />{' '}
                    <strong>State: </strong>{order.shippingAddress.state}, {' '}
                    <strong>Phone: </strong>{order.shippingAddress.phone}
                  </p>
                  {order.isDelivered ? (
                    <ErrMess variant="success">
                      Delivered at {order.deliveredAt}
                    </ErrMess>
                  ) : (
                    <ErrMess variant="danger">Not Delivered</ErrMess>
                  )}
                </div>
              </li>
              <li>
                <div className="card card-body">
                  <h2>Payment</h2>
                  <p>
                    <strong>Method:</strong> {order.paymentMethod}
                  </p>
                  {order.isPaid ? (
                    <ErrMess variant="success">
                      Paid at {order.paidAt}
                    </ErrMess>
                  ) : (
                    <ErrMess variant="danger">Not Paid</ErrMess>
                  )}
                </div>
              </li>
              <li>
                <div className="card card-body">
                  <h2>Order Items</h2>
                  <ul>
                    {order.orderItems.map((item) => (
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
                    <div>N{order.itemsPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Shipping</div>
                    <div>N{order.shippingPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Tax</div>
                    <div>N{order.taxPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>
                      <strong> Order Total</strong>
                    </div>
                    <div>
                      <strong>N{order.totalPrice.toFixed(2)}</strong>
                    </div>
                  </div>
                </li>
                {!order.isPaid && (
                <li>
                  {!sdkReady ? (
                    <LoadingMess/>
                  ) : (
                    <>
                      {errorPay && (
                        <ErrMess variant="danger">{errorPay}</ErrMess>
                      )}
                      {loadingPay && <LoadingMess/>}

                      <PayPalButton
                        amount={order.totalPrice}
                        onSuccess={successPaymentHandler}
                      ></PayPalButton>
                    </>
                  )}
                </li>
              )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }