import React, { Component } from 'react'
import ProductList from './productslist'

export default class ShoppingCart extends Component {

    constructor(){
        super()
        this.state = {
            products: []
          }
    }
  
    // componentDidMount(){
    // var promise = fetch("http://localhost:5001/products", {method: "GET"})
    // promise.then((response) => {
    //   console.log(response);
    //   var promise2 = response.json();
    //   promise2.then((prods) => {
    //     console.log(prods);
    //     this.setState({products:prods})
    //   })
    // })
    // }
    componentDidMount = async () => {
      var response = await fetch("http://localhost:5001/products", {method: "GET"})
      
      var prods = await response.json();
      console.log(prods);
      this.setState({products: prods})
      }
 
 
 
  handleIncrement = (mypr, maxVal) => {
    let myprods = [...this.state.products]
    let index = myprods.indexOf(mypr)
    if (myprods[index].quantity < maxVal){
        myprods[index].quantity++
        this.setState({ products: myprods})
    }
   
  }

  handleDecrement = (mypr, minVal) => {
let myprods = [...this.state.products]
let index = myprods.indexOf(mypr)
if (myprods[index].quantity > 0){
    myprods[index].quantity--
    this.setState({ products: myprods})
}

  }
  handleDelete = (mypr) => {
      console.log('delete', mypr);
    //   const del = this.state.products.filter(coro => coro.id !== mypr)
    //   this.setState({del})
    let myprods = [...this.state.products]
    let index = myprods.indexOf(mypr)

    if(window.confirm('Are you sure to delete')){
        myprods.splice(index, 1)
        this.setState({ products: myprods})  
    }
    
  } 
  
  render(){
        return(
             <div className = "container-fluid">
                 <h4>Shopping Cart </h4>
                 <div className = "row">{this.state.products.map((prod) => 
                 { return <ProductList key={prod.id} Allproducts= {prod}
                 OnIncrement = {this.handleIncrement} OnDecrement = {this.handleDecrement} OnDelete = {this.handleDelete}> 
                 <button className = "btn btn-success">Order Now</button>
                 </ProductList>;
                   })} </div>
                 </div>
        )
    }
}