import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import './Login.css';
const Login = () => {
   const { signIn, logOut } = useContext(AuthContext)
   const handleSubmit = (event) => {
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
         .then(res => {
            const user = res.user;
            console.log(user)
            alert('Successful LogIn')
            form.reset()
         })
         .catch(error => console.error(error))
      logOut()
         .then(() => {
            alert('Successful LogOut')
         })
         .catch(error => console.error(error))
   }
   return (
      <div className='form-container'>
         <h2 className='form-title'>Login</h2>
         <form onSubmit={handleSubmit}>
            <div className="form-control">
               <label htmlFor="email">Email</label>
               <input type="email" name="email" placeholder='Your Email' id="email" required />
            </div>
            <div className="form-control">
               <label htmlFor="password">Password</label>
               <input type="password" name="password" placeholder='Your Password' id="password" required />
            </div>
            <input className='btn-submit' type="submit" value="Log In" />
         </form>
         <p>New to ema john <Link to='/signup'>Create a new Account</Link> </p>
      </div>
   );
};

export default Login;