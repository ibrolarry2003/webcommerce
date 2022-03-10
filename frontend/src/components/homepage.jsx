import React, { Component } from 'react';

export default class Homepage extends Component{
    state = {
        Apptitle: 'Customers Section',
        
        customersCount: 5,
        customers: [
            {id: 1,
             name: 'Ibrahim', 
             phone: "1234-9876", 
             address: {city: "Abeokuta"},
             photo: "https://picsum.photos/536/354"},

            {id: 2, 
            name: 'Ibrahim2', 
            phone: "1234-9867",  
            address: {city: "Ibadan"},
            photo: "https://picsum.photos/536/354"},

            {id: 3, 
            name: 'Ibrahim3', 
            phone: "1234-9890",  
            address: {city: "Lagos"},
            photo: "https://picsum.photos/id/1010/60"},

            {id: 4, 
            name: 'Ibrahim4', 
            phone: null,  
            address: {city: "Osogbo"},
            photo: "https://picsum.photos/536/354"},

            {id: 5, 
            name: 'Ibrahim5', 
            phone: null,  
            address: {city: "Osogbolife"},
            photo: "https://picsum.photos/536/354"},

        ]
     };






     OnRefreshClick = () => {
         this.setState({customersCount: this.state.customersCount + 1})
        //  console.log('Clicked Refresh')
     }

     
     renderNOPhone = (phone) =>  phone  ? (phone) :<div className = 'bg-warning p-1 '>Phone num not available</div>
         
     getRow = () => {
      return  (this.state.customers.map((cust) => {
            return (<tr key = {cust.id}>
               <td>{cust.id}</td>
               <td><img src = {cust.photo} alt = "customer" width = '100'/></td>
               <td>{cust.name}</td>
               <td>{this.renderNOPhone(cust.phone)}</td>
               <td>{cust.address.city}</td>
           </tr>

            )
        }
        
   )) }
        
     

    render(){
    
        const { Apptitle, customersCount } = this.state;

        return(
            <div>
               
                <h4 className = 'border-bottom m-1 p-1'>{Apptitle}
                <span className= 'badge bg-light text-dark m-2'>{customersCount}</span>
                <button type="button" className="btn btn-info" onClick = {this.OnRefreshClick}>Refresh
                 </button>
                </h4>
                 <table className="table table-success table-striped" >
                     <thead className="table-success">
                     <tr className="table-success">
                         <th>Customer id</th>
                         <th>Photograh</th>
                         <th>Customer Name</th>
                         <th>Phone-Number</th>
                         <th>Address</th>
                     </tr >
                     </thead>
                     <tbody>{this.getRow()}
                    </tbody>
                     

                 </table>

               
            </div>
        )
    }
}