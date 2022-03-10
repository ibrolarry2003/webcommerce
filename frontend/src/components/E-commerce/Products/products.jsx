import React from 'react';
import ProductRating from './productrating';
import { Link } from 'react-router-dom';



export default function ProductTrevoList(props) {
  const { dataz } = props;
  return (
    <div key={dataz._id} className="card">
      <Link to={`/product/${dataz._id}`}>
        <img className="medium" src={dataz.image} alt={dataz.name} />
      </Link>
      <div className="card-body">
        <Link to ={`/product/${dataz._id}`}>
          <h2>{dataz.name}</h2>
        </Link>
     <ProductRating customer_rating={dataz.ratings}
          customer_reviews={dataz.reviewz}/>
        <div className="price">N{dataz.price}</div>
      </div>
    </div>
  );
}