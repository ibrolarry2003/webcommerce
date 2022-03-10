import React, { useEffect } from 'react'
// import the_products from '../Databse/data.js'
import ProductTrevoList from '../Products/products'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../Products/productActions/action';
import LoadingMess from './loadingMess';
import ErrMess from './errMess';





function ProductHomepage() {

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);


    return (

      <div>
      {loading ? (
        <LoadingMess/>
      ) : error ? (
        <ErrMess variant="danger">{error}</ErrMess>
      ) : (
        <div className="row center">
          {products.map((dataz) => (
             <ProductTrevoList key= {dataz._id} dataz = {dataz}/>
          ))}
        </div>
      )}
    </div>
  );
}

//         <div>
//         <div className="row center">
//       {products.map(dataz => ( 
//         <ProductTrevoList key= {dataz.id} dataz = {dataz}/>
//       )  )}   
            
//           </div>
//           </div>
//     )
// }

export default ProductHomepage
