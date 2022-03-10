import React, { Component } from 'react';


export default class ProductList extends Component{

    state= {
       Allproducts: this.props.Allproducts,
    }

    render(){ 
        const { id, productName, price, quantity} = this.state.Allproducts;
     
        
        return(
        <div className = "col-lg-6">
        <div className = "card m-3">
            <div className = "card-body">
            <div className = "text=muted"># {id}
            <span className= "pull-right hand-icon"
             onClick =  {() => {this.props.OnDelete(this.state.Allproducts)}}>
                <i className = 'fa fa-times'></i>
                </span> </div>
            <h4 className = "pt-5 border-top"> 
            {productName} </h4>
            <div> N{price}.00</div>
            </div>
            <div className = "card-footer">
                <div className = "float-left">
                <span className = "badge bg-secondary">{quantity}</span> {' '}
               <div className = "btn-group m-2">
                   <button className = "btn btn-outline-success" 
                   onClick = { ()=> {this.props.OnIncrement(this.state.Allproducts, 10)}}>+</button>
                   <button className = "btn btn-outline-success"
                    onClick = { ()=> {this.props.OnDecrement(this.state.Allproducts, 0)}}>-</button>
               </div>
                </div>
                <div className = "float-right">
                {this.props.children}
                </div>
                </div>
                 </div>
            </div>
        
         )
    }
}