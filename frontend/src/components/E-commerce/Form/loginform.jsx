import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signin } from '../Products/productActions/userActions';
import LoadingMess from '../Products/loadingMess';
import ErrMess from '../Products/errMess'


export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
 
  const location = useLocation();
  const redirect = location.search ? location.search.split('=')[1]: '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

 
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: sign in action
    dispatch(signin(email, password));
  };
  const navigate = useNavigate();
  // const submitHandler = (e) => { e.preventDefault(); dispatch(signin(email, password)); 
  //   if (!error) { navigate("/"); } };

  
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
         {loading && <LoadingMess/>} 
        {error && <ErrMess variant="danger">{error}</ErrMess>} 
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
          New customer?{' '}
            <Link to={`/register?redirect=${redirect}`}>
              Create your account
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}