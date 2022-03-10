import React, { Component } from 'react'

export class Customerlogin extends Component {
    
    
    
    
    
    
    
    
    
    constructor(props){
        super(props)
        this.state = {usermail: "", pswrd: "", message: ""}
    }
    
    
    OnLoginSuccess = async () => {
        console.log(this.state);
       var response = await 
       fetch(`http://localhost:5001/users?usermail=${this.state.usermail}&pswrd=${this.state.pswrd}`, 
       {method: "GET"});
       var body = await response.json();
       console.log(body);
    
        if(body.length > 0){
                this.setState({message: (<span className = 'text success'>Successfully logged in</span>)}) 
        }else {
            this.setState({message: (<span className = 'text danger'>Invalid loggin information</span>)})
        }
    }
    
    
    
    render() {
        return (
            <div className = 'container'>
                <div className = 'col-lg-6 d-flex align-items-center' >
                    
                <form>
                <h4 className = 'm-1 p-2 border-bottom'>Login </h4>
  <div className="mb-3 m-2">
    <label id="exampleInputEmail1" className="form-label">Username/Email</label>
    <input type="text" value= {this.state.usermail} 
    onChange = {(event) => {this.setState({usermail:event.target.value})}}
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3 m-2">
    <label id="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value = {this.state.pswrd} className="form-control"  id="exampleInputPassword1" 
    onChange = {(event) => {this.setState({pswrd:event.target.value})}}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" id="exampleCheck1">Check me out</label>
  </div>
  <div> <span>{this.state.message}</span>  </div>
  <button type="submit" className="btn btn-success" onClick = {this.OnLoginSuccess}>Sign in</button>
</form>
                
            </div>
            </div>
        )
    }
}

export default Customerlogin
