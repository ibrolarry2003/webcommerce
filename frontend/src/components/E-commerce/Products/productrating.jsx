import React from 'react';

export default function ProductRating(props) {
  const { customer_rating, customer_reviews } = props;
  return (
    <div className="rating">
      <span>
        <i
          className={
            customer_rating >= 1
              ? 'fa fa-star'
              : customer_rating >= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            customer_rating >= 2
              ? 'fa fa-star'
              : customer_rating >= 1.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            customer_rating >= 3
              ? 'fa fa-star'
              : customer_rating >= 2.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            customer_rating >= 4
              ? 'fa fa-star'
              : customer_rating >= 3.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            customer_rating >= 5
              ? 'fa fa-star'
              : customer_rating >= 4.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>{customer_reviews + ' reviews'}</span>
    </div>
  );
}