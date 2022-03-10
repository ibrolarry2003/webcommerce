import React from 'react'
import {Link} from 'react-router-dom'
import LoadingMess from './loadingMess'

function LoadingMessCart() {
    return (
        <div>
            <LoadingMess/>
            <h3>  Shopping Cart is empty. <Link to="/product">Visit the Product Section</Link></h3>
        </div>
    )
}

export default LoadingMessCart
