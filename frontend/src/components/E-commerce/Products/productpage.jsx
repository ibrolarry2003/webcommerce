import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../Products/productActions/action';
// import the_products from '../Databse/data.js';
import ProductRating from './productrating';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import LoadingMess from './loadingMess';
import ErrMess from './errMess';


export default function Productpage() {
    let params = useParams();
    
    const dispatch = useDispatch();
  const productId = params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

    const navigate = useNavigate()
    const addToCartHandler = () => {
      navigate(`/cart/${productId}?qty=${qty}`);
    };

    return (
      <div>
        {loading ? (
          <LoadingMess/>
        ) : error ? (
          <ErrMess variant="danger">{error}</ErrMess>
        ) : (
          <div>
            <Link to="/product">Back to result</Link>
            <div className="row top">
              <div className="col-2">
                <img
                  className="large"
                  src={product.image}
                  alt={product.name}
                ></img>
              </div>
              <div className="col-1">
                <ul>
                  <li>
                    <h1>{product.name}</h1>
                  </li>
                  <li>
                    <ProductRating
                      customer_rating={product.ratings}
                      customer_reviews={product.reviewz}
                    />
                  </li>
                  <li>Price : N{product.price}</li>
                  <li>
                    Description:
                    <p>{product.description}</p>
                  </li>
                </ul>
              </div>
              <div className="col-1">
                <div className="card card-body">
                  <ul>
                    <li>
                      <div className="row">
                        <div>Price</div>
                        <div className="price">N{product.price}</div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div>Status</div>
                        <div>
                          {product.countInStock > 0 ? (
                            <span className="success">In Stock</span>
                          ) : (
                            <span className="danger">Unavailable</span>
                          )}
                        </div>
                      </div>
                    </li>
                    {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                    <li>
                      <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                    </li>
                    </>
                  )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

 